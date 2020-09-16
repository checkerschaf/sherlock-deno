import {
  printFatalError,
  printSherlockDeno,
  printTotalResults,
} from "./printer.ts";
import Timer from "./lib/timer.ts";
import { CliArguments } from "./deps.ts";
import Scanner from "./scanner.ts";
import { readCliArguments } from "./lib/cli.ts";

const run = async (): Promise<void> => {
  // Start a timer and show a beatiful Sherlock.ts ASCII image
  Timer.start();
  printSherlockDeno();

  // Get command line arguments
  const argv: CliArguments = await readCliArguments(Deno.args);

  // Create a new scanner with the arguments from the command line
  const scanner = new Scanner({
    username: argv.username ?? "",
    onlyMatching: argv.onlyMatching,
    realtimeOutput: !argv.format,
    timeout: argv.timeout ?? 100000,
    format: argv.format,
  });

  // Show the total results after finishing all sub-processes
  window.onunload = () => printTotalResults(scanner);

  // Start the scan and wait for it to finish
  await scanner.scan()
    .catch(
      (err: Error) => printFatalError(err),
    );
};

if (import.meta.main) {
  await run();
}
