import type {
  ScannerOptions,
  SiteResult,
} from "./types.ts";
import { ScannerResult } from "./enums.ts";
import { getSiteResult } from "./fetcher.ts";
import { sites } from "../sites.ts";
import { printSiteResult, printTotalResults } from "./printer.ts";
import Timer from "./lib/timer.ts";

export default class Scanner {
  options: ScannerOptions;
  results: Array<SiteResult> = new Array<SiteResult>();
  timer = new Timer();

  /**
   * Create a new Scanner. Scanners scan through all sites and call events on their progress.
   * Events called: onSiteProcessed(), onFinish().
   *
   * @param options
   */
  constructor(options: ScannerOptions) {
    this.options = options;
  }

  /**
   * Start the scan to process all sites with the scanners options.
   */
  async scan(): Promise<void> {
    // Validate the username
    if (this.isValidUsername(this.options.username)) {
      throw new Error("Username contains invalid characters. Stopping.");
    }

    // Start the timer to track the runtime
    this.timer.start();

    // Scan all sites asynchronous
    await Promise.all(
      Object.keys(sites).map(async (siteName) => {
        const siteResult = await getSiteResult(
          sites[siteName],
          this.options.username,
          this.options.timeout * 1000, // convert seconds from CLI to milliseconds
        );
        if (
          siteResult.result === ScannerResult.SUCCESS ||
          this.options.showAll
        ) {
          this.results.push(siteResult);
          this.onSiteProcessed(siteResult, siteName);
        }
      }),
    );

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
  onSiteProcessed(result: SiteResult, siteName: string): void {
    if (this.options.realtimeOutput) {
      printSiteResult(result, siteName);
    }
  }

  /**
   * This method is called after all sites have been processed.
   * Overwrite this function to define a custom onFinish() handler.
   */
  onFinish(): void {
    printTotalResults(this);
  }
}
