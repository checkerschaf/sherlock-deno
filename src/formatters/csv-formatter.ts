import { Formatter } from "./formatter.ts";
import type { FormatterOnFinishOptions } from "./formatter.ts";
import type { SiteResult } from "../types.ts";
import { getSiteUserUrl } from "../lib/fetcher.ts";

export class CsvFormatter extends Formatter {
  onInit(): void {}
  onStart(): void {}
  onResult(_siteResult: SiteResult): void {}

  onFinish(options: FormatterOnFinishOptions): void {
    this.exportResultsAsCsv(options);
  }

  exportResultsAsCsv(options: FormatterOnFinishOptions) {
    const filteredResults = this.filterResults(options.results);

    // Print CSV header
    console.log("site,url,result");

    // Print CSV rows
    for (const siteResult of filteredResults) {
      console.log(
        `${siteResult.siteName},"${
          getSiteUserUrl(siteResult.site, options.username)
        }",${siteResult.result}`,
      );
    }
  }
}
