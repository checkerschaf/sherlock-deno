import type { SherlockScannerOptions, SiteResult } from "./types.ts";
import { fetchSite } from "./lib/fetcher.ts";
import { sites } from "../sites.ts";
import Timer from "./lib/timer.ts";

export class SherlockScanner {
  options: SherlockScannerOptions;
  results: SiteResult[] = [];
  timer = new Timer();

  /**
   * Create a new Scanner. Scanners scan through all sites and call events on their progress.
   * Events called: onSiteProcessed(), onFinish().
   *
   * @param options
   */
  constructor(options: SherlockScannerOptions) {
    // Validate the username
    if (this.isValidUsername(options.username)) {
      throw new Error("Username contains invalid characters. Stopping.");
    }

    this.options = options;
  }

  /**
   * Start the scan to process all sites with the scanners options.
   */
  async scan(): Promise<void> {
    this.options.formatter.onStart();

    // Start the timer to track the runtime
    this.timer.start();

    // Scan all sites asynchronously
    const fetches = Object.keys(sites).map((siteName) => {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          fetchSite({
            site: sites[siteName],
            siteName,
            username: this.options.username,
            timeout: this.options.timeout * 1000, // convert seconds from CLI to milliseconds
            proxyConfig: this.options.proxyConfig,
          }).then((siteResult) => {
            this.results.push(siteResult);
            this.onSiteProcessed(siteResult);
            resolve();
          }).catch((error) => {
            reject(error);
          });
        }, 1);
      });
    });

    // Wait for all promised to be finished
    await Promise.allSettled(fetches);

    // Stop the timer to get the total runtime
    this.timer.end();

    // Call onFinish() event
    this.onFinish();
  }

  /**
   * Returns whether a username is valid. (e.g. whitespaces are not allowed)
   *
   * @param username
   */
  isValidUsername(username: string): boolean {
    return username.match(/^[^ /&?]+$/g) === null;
  }

  /**
   * This method is called for every site that has been processed.
   * Overwrite this function to define a custom onSiteProcessed() handler.
   *
   * @param result Result of the site scan.
   * @param siteName The name of the site.
   */
  onSiteProcessed(result: SiteResult): void {
    this.options.formatter.onResult(result);
  }

  /**
   * This method is called after all sites have been processed.
   * Overwrite this function to define a custom onFinish() handler.
   */
  onFinish(): void {
    this.options.formatter.onFinish({
      results: this.results,
      elapsedTime: this.timer.elapsedTime(),
      username: this.options.username,
    });
  }
}
