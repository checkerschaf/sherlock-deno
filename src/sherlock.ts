import {
  printFatalError,
  printSherlockDeno,
  printTotalResults,
} from "./printer.ts";
import Timer from "./lib/timer.ts";
import { CliArguments } from "./deps.ts";
import { getUsername, readCliArguments } from "./lib/cli.ts";
import Scanner from "./scanner.ts";

const VERSION = "1.3.0";

const runSherlock = async (): Promise<void> => {
  // Show a beautiful Sherlock ASCII image
  printSherlockDeno();

  // Get command line arguments
  const argv: CliArguments = await readCliArguments(Deno.args);

  // Create a new scanner with the arguments from the command line
  const scanner = new Scanner({
    username: await getUsername(argv),
    onlyMatching: argv.onlyMatching,
    realtimeOutput: !argv.format,
    timeout: argv.timeout ?? 30,
    format: argv.format,
  });

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

// If this script is run directly, also make it work :)
if (import.meta.main) {
  await runSherlock();
}

export { runSherlock, VERSION };
