import { runSherlock } from "./src/sherlock.ts";

// If this script is run directly, execute the sherlock script :)
if (import.meta.main) {
  await runSherlock();
}
