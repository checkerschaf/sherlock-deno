import type { SiteResult } from "../types.ts";
import { ScannerResult } from "../enums.ts";

export type FormatterOptions = {
  showAll?: boolean;
};

export type FormatterOnFinishOptions = {
  results: SiteResult[];
  username: string;
  elapsedTime?: number;
};

export abstract class Formatter {
  options: FormatterOptions = {};

  constructor(options?: FormatterOptions) {
    this.options = options || { showAll: false };
  }

  shouldShowResult(siteResult: SiteResult): boolean {
    return this.options.showAll || siteResult.result === ScannerResult.SUCCESS;
  }

  filterResults(siteResults: SiteResult[]) {
    return siteResults.filter((siteResult) =>
      this.shouldShowResult(siteResult)
    );
  }

  abstract onInit(): void;
  abstract onStart(): void;
  abstract onResult(siteResult: SiteResult): void;
  abstract onFinish(options: FormatterOnFinishOptions): void;
}
