import Scanner from "./src/scanner.ts";
import {
  printFatalError,
  printSherlockDeno,
} from "./src/printer.ts";
import { readCliArguments } from "./src/cli.ts";

/**
 * This is the entry point to the Sherlock-CLI.
 */
const runSherlockCli = async (): Promise<void> => {
  // Show a beautiful Sherlock ASCII image
  printSherlockDeno();

  // Create a new scanner with the arguments from the command line
  const scanner = new Scanner(await readCliArguments());

  // Start the scan and wait for it to finish
  await scanner.scan()
    .catch(
      (err: Error) => {
        printFatalError(err);
        Deno.exit(1);
      },
    );
};

// Start the Sherlock-CLI
if (import.meta.main) {
  await runSherlockCli();
}

export { runSherlockCli };
