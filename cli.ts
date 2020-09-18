import Scanner from "./src/scanner.ts";
import {
  printFatalError,
  printSherlockDeno,
  printSiteResult,
  printTotalResults,
} from "./src/printer.ts";
import { readCliArguments } from "./src/lib/cli.ts";

/**
 * This is the entry point to the Sherlock-CLI.
 */
const runSherlockCli = async (): Promise<void> => {
  // Show a beautiful Sherlock ASCII image
  printSherlockDeno();

  // Create a new scanner with the arguments from the command line
  const scanner = new Scanner(await readCliArguments());
  scanner.onSiteProcessed = (result, siteName) =>
    printSiteResult(result, siteName, scanner.options);
  scanner.onFinish = () => printTotalResults(scanner);

  // Start the scan and wait for it to finish
  await scanner.scan()
    .catch(
      (err: Error) => printFatalError(err),
    );
};

// Start the Sherlock-CLI
if (import.meta.main) {
  await runSherlockCli();
}

export { runSherlockCli };
