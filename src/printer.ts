import { c } from "./deps.ts";
import { ScannerOptions, SiteResult } from "./types.ts";
import { OutputFormat, ScannerResult } from "./enums.ts";
import Timer from "./lib/timer.ts";
import Scanner from "./scanner.ts";

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
  siteResult: SiteResult,
  options: ScannerOptions,
): void => {
  switch (siteResult.result) {
    case ScannerResult.SUCCESS:
      if (options.realtimeOutput) {
        console.log(
          c.bold(
            `[${c.green("+")}] ${c.green(siteResult.site)}: ${siteResult.url}`,
          ),
        );
      }

      break;
    case ScannerResult.NOT_FOUND:
      if (options.realtimeOutput) {
        console.log(
          c.bold(`[${c.red("-")}] ${c.gray(siteResult.site)}`),
        );
      }

      break;
    default:
      if (options.realtimeOutput) {
        console.log(
          c.bold(
            `[${c.red("-")}] ${c.red(siteResult.site)}: ${siteResult.error}`,
          ),
        );
      }
  }
};

const printTotalResults = (
  scanner: Scanner,
): void => {
  if (scanner.options.realtimeOutput) {
    console.log(c.green(`\nFinished in ${Math.round(Timer.end() / 1000)} seconds.`));
    console.log(
      c.green(
        `Found a total of ${
          c.bold(`${getTotalMatches(scanner.results)} matches`)
        } across ${Object.keys(scanner.results).length} sites.`,
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
      console.log("site,url,result,error");
      for (const site of scanner.results) {
        console.log(
          `${site.site},${site.url},${site.result},${site.error ?? "null"}`,
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

export {
  printSherlockDeno,
  printFatalError,
  printSiteResult,
  printTotalResults,
};
