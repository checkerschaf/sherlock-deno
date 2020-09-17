import { c } from "./deps.ts";
import { ScannerOptions, SiteResult } from "./types.ts";
import { OutputFormat, ScannerResult } from "./enums.ts";
import Timer from "./lib/timer.ts";
import Scanner from "./scanner.ts";
import { sites } from "./sites.ts";

const printSherlockDeno = (): void => {
  console.log(c.cyan(`
                                                                         ,_
   ███████╗██╗  ██╗███████╗██████╗ ██╗      ██████╗  ██████╗██╗  ██╗   ,'  \`\\,_
   ██╔════╝██║  ██║██╔════╝██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝   |_,-'_)
   ███████╗███████║█████╗  ██████╔╝██║     ██║   ██║██║     █████╔╝    /##c '\\  (
   ╚════██║██╔══██║██╔══╝  ██╔══██╗██║     ██║   ██║██║     ██╔═██╗   ' |'  -{.  )
   ███████║██║  ██║███████╗██║  ██║███████╗╚██████╔╝╚██████╗██║  ██╗    /\\__-' \\[]
   ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝    /\`-_\`\\
                      Made with ${
    c.red("<3")
  } by checkerschaf.                     '     \\
`));
};

const printFatalError = (err: Error): void => {
  console.log(c.red(`[!] Fatal error: ${err.message || err}`));
};

const printSiteResult = (
  siteName: string,
  siteResult: SiteResult,
  options: ScannerOptions,
): void => {
  switch (siteResult.result) {
    case ScannerResult.SUCCESS:
      if (options.realtimeOutput) {
        console.log(
          c.bold(
            `[${c.green("+")}] ${c.green(siteName)}: ${siteResult.url}`,
          ),
        );
      }

      break;
    case ScannerResult.NOT_FOUND:
      if (options.realtimeOutput) {
        console.log(
          c.bold(`[${c.red("-")}] ${c.gray(siteName)}`),
        );
      }

      break;
    default:
      if (options.realtimeOutput) {
        console.log(
          c.bold(
            `[${c.red("-")}] ${c.red(siteName)}: ${siteResult.error}`,
          ),
        );
      }
  }
};

const printTotalResults = (
  scanner: Scanner,
): void => {
  if (scanner.options.realtimeOutput) {
    console.log(
      c.green(`\nFinished in ${Math.round(Timer.end() / 1000)} seconds.`),
    );
    console.log(
      c.green(
        `Found a total of ${
          c.bold(`${getTotalMatches(scanner.results)} matches`)
        } across ${Object.keys(sites).length} sites.`,
      ),
    );
    return;
  }

  // Export in different formats
  switch (String(scanner.options.format).toUpperCase()) {
    case OutputFormat.JSON:
      console.log(JSON.stringify(scanner.results));
      break;
    case OutputFormat.PRETTY_JSON:
      console.log(JSON.stringify(scanner.results, null, 4));
      break;
    case OutputFormat.CSV:
      console.log("site,url,result");
      for (const site of scanner.results) {
        console.log(
          `${site.site},${site.url},${site.result}`,
        );
      }
      break;
  }
};

const getTotalMatches = (results: Array<SiteResult>): number => {
  return results
    .filter((siteResult) => (siteResult.result === ScannerResult.SUCCESS))
    .length;
};

const printPermissionError = () => {
  printFatalError(
    new Error(
      "Permission error. Try running again with the --allow-net --allow-read flags.",
    ),
  );
};

export {
  printSherlockDeno,
  printFatalError,
  printSiteResult,
  printTotalResults,
  printPermissionError,
};
