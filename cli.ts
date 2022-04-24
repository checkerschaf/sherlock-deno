import { SherlockScanner } from "./src/sherlock-scanner.ts";
import { printFatalError } from "./src/errors.ts";
import { readCliArguments } from "./src/cli.ts";

/**
 * This is the entry point to the Sherlock-CLI.
 */
const runSherlockCli = async (): Promise<void> => {
  // Create a new scanner with the arguments from the command line
  const scanner = new SherlockScanner(readCliArguments());

  // Start the scan and wait for it to finish
  await scanner
    .scan();
};

// Start the Sherlock-CLI
if (import.meta.main) {
  await runSherlockCli();
}

export { runSherlockCli };
