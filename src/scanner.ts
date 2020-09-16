import {
  ScannerOptions,
  SiteResult,
} from "./types.ts";
import { printSiteResult } from "./printer.ts";
import { ScannerResult } from "./enums.ts";
import { getSiteResult } from "./lib/fetcher.ts";
import {sites} from "./sites.ts";

export default class Scanner {
  options: ScannerOptions;
  results: Array<SiteResult> = new Array<SiteResult>();

  constructor(options: ScannerOptions) {
    this.options = options;
  }

  async scan(): Promise<void> {
    this.verifyUsername();

    Object.keys(sites).forEach((site) => {
      this.processSite(
        site,
        sites[site].replace("{}", this.options.username),
      );
    });
  }

  verifyUsername(): void {
    if (!String(this.options.username).match(/^[^ /&?]+$/g)) {
      throw new Error("Username contains invalid characters. Stopping.");
    }
  }

  async processSite(site: string, url: string) {
    const siteResult = await getSiteResult(
      site,
      url,
      this.options.username,
      this.options.timeout * 1000, // convert seconds from CLI to milliseconds
    );

    if (
      siteResult.result === ScannerResult.SUCCESS ||
      !this.options.onlyMatching
    ) {
      this.results.push(siteResult);
      printSiteResult(siteResult, this.options);
    }
  }
}
