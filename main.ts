import {
  printFatalError,
  printSherlockDeno,
  printTotalResults,
} from "./src/printer.ts";
import Timer from "./src/lib/timer.ts";
import { readCliArguments } from "./src/lib/cli.ts";
import Scanner from "./src/scanner.ts";

const SHERLOCK_VERSION = "1.5.0";

/**
 * This is the entry point to the sherlock script.
 */
const runSherlock = async (): Promise<void> => {
  // Show a beautiful Sherlock ASCII image
  printSherlockDeno();

  // Create a new scanner with the arguments from the command line
  const scanner = new Scanner(await readCliArguments());

  // Show the total results after finishing all sub-processes
  window.onunload = () => printTotalResults(scanner);

  // Start a Timer to track the runtime
  Timer.start();

  // Start the scan and wait for it to finish
  await scanner.scan()
    .catch(
      (err: Error) => printFatalError(err),
    );
};

// Start the sherlock script
if (import.meta.main) {
  await runSherlock();
}

export { SHERLOCK_VERSION };
