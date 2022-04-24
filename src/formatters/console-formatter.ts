import { Formatter } from "./formatter.ts";
import type { FormatterOnFinishOptions } from "./formatter.ts";
import { printSherlockDenoAscii } from "../cli.ts";
import { bold, brightGreen, gray, green, red } from "std/fmt/colors.ts";
import type { SiteResult } from "../types.ts";
import { ScannerResult } from "../enums.ts";
import { sitesCount } from "../../sites.ts";

export class ConsoleFormatter extends Formatter {
  onInit(): void {
    printSherlockDenoAscii();
  }

  onStart(): void {}

  onResult(siteResult: SiteResult) {
    if (this.shouldShowResult(siteResult)) {
      printSiteResult(siteResult);
    }
  }

  onFinish(options: FormatterOnFinishOptions): void {
    const { results, elapsedTime = 0 } = options;
    const totalMatches = Object.values(results).filter(
      (siteResult) => siteResult.result === ScannerResult.SUCCESS,
    ).length;

    console.log(
      green(`\nFinished in ${Math.round(elapsedTime / 1000)} seconds.`),
    );
    console.log(
      green(
        `Found a total of ${
          bold(
            brightGreen(`${totalMatches} matches`),
          )
        } across ${sitesCount} sites.`,
      ),
    );
  }
}

const printSiteResult = (siteResult: SiteResult): void => {
  const { result, siteName, url, error } = siteResult;
  switch (result) {
    case ScannerResult.SUCCESS:
      console.log(bold(`[${green("+")}] ${green(siteName)}: ${url}`));
      break;
    case ScannerResult.NOT_FOUND:
      console.log(bold(`[${red("-")}] ${gray(siteName)}`));
      break;
    default:
      console.log(
        bold(
          `[${red("-")}] ${red(siteName)}${error ? `: ${error}` : ""}`,
        ),
      );
  }
};
