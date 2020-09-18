/**
 * @deprecated Please use cli.ts instead as the entry point.
 * TODO: Remove in 2.0.0!
 */

import { runSherlockCli } from "./cli.ts";
import { c } from "./src/deps.ts";

const deprecatedWarning = `${
  c.yellow(
    `[!] This script for running Sherlock-Deno is deprecated and will break in 2.0.0! Please use`,
  )
} ${c.green(c.bold("deno run cli.ts"))} ${c.yellow(`instead.`)}`;

// Start the sherlock script
if (import.meta.main) {
  console.log(deprecatedWarning);
  await runSherlockCli();
  console.log(deprecatedWarning);
}
