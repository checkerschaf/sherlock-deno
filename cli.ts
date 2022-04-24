import { SherlockScanner } from "./src/sherlock-scanner.ts";
import { readCliArguments } from "./src/cli.ts";
import { printFatalError } from "./src/errors.ts";

/**
 * This is the entry point to the Sherlock-CLI.
 */
const runSherlockCli = async (): Promise<void> => {
  // Create a new scanner with the arguments from the command line
  const scanner = new SherlockScanner(readCliArguments());

  // Start the scan and wait for it to finish
  await scanner
    .scan()
    .catch((err: Error) => {
      printFatalError(err);
      Deno.exit(1);
    })
    .finally(() => Deno.exit(0));
};

// Start the Sherlock-CLI
if (import.meta.main) {
  await runSherlockCli();
}

export { runSherlockCli };
