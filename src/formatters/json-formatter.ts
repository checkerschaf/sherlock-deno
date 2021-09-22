import { Formatter } from "./formatter.ts";
import type { FormatterOnFinishOptions } from "./formatter.ts";
import type { SiteResult } from "../types.ts";
import { ScannerResult } from "../enums.ts";
import { getSiteUserUrl } from "../lib/fetcher.ts";

type JsonDataOutput = {
  [siteName: string]: {
    url: string;
    result: ScannerResult;
  };
};

export class JsonFormatter extends Formatter {
  onInit(): void {}
  onStart(): void {}
  onResult(_siteResult: SiteResult): void {}

  onFinish(options: FormatterOnFinishOptions): void {
    this.exportResultsAsJson(options, { prettyPrint: false });
  }

  exportResultsAsJson(
    options: FormatterOnFinishOptions,
    { prettyPrint = false }: { prettyPrint: boolean },
  ) {
    const filteredResults = this.filterResults(options.results);

    const jsonData: JsonDataOutput = {};
    for (const siteResult of filteredResults) {
      jsonData[siteResult.siteName] = {
        url: getSiteUserUrl(siteResult.site, options.username),
        result: siteResult.result,
      };
    }

    const json = prettyPrint
      ? JSON.stringify(jsonData, null, 4)
      : JSON.stringify(jsonData);
    console.log(json);
  }
}
