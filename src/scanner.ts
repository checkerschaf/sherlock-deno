import {
  ScannerOptions,
  SiteResult,
  Sites,
  WorkerResultMessage,
  WorkerStartMessage,
} from "./types.ts";
import { printSiteResult } from "./printer.ts";
import { ScannerResult } from "./enums.ts";

export default class Scanner {
  options: ScannerOptions;
  results: Array<SiteResult> = new Array<SiteResult>();
  sites: Sites = {};

  constructor(options: ScannerOptions) {
    this.options = options;
  }

  async scan(): Promise<void> {
    this.verifyUsername();
    await this.loadSites();

    Object.keys(this.sites).forEach((site) => {
      this.createWorker(
        site,
        this.sites[site].replace("{}", this.options.username),
      );
    });
  }

  verifyUsername(): void {
    if (!String(this.options.username).match(/^[^ /&?]+$/g)) {
      throw new Error("Username contains invalid characters. Stopping.");
    }
  }

  async loadSites(): Promise<void> {
    this.sites = JSON.parse(await Deno.readTextFile("./sites.json"));
  }

  createWorker(site: string, url: string) {
    const startMsg: WorkerStartMessage = {
      username: this.options.username,
      url,
      timeout: this.options.timeout,
    };

    const worker = new Worker(
      new URL("worker.ts", import.meta.url).href,
      { type: "module" },
    );
    worker.onmessage = (event) => {
      const msg: WorkerResultMessage = event.data;
      const siteResult: SiteResult = {
        site,
        url,
        result: msg.result,
        error: msg.error,
      };
      if (
        siteResult.result === ScannerResult.SUCCESS ||
        !this.options.onlyMatching
      ) {
        this.results.push(siteResult);
        printSiteResult(siteResult, this.options);
      }
    };
    worker.postMessage(startMsg);
  }
}
