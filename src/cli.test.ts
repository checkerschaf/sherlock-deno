import {
  getShowHelpStr,
  getShowVersionStr,
  parseArguments,
  readCliArguments,
} from "./cli.ts";
import { assertEquals, assertStringIncludes } from "./testing-deps.ts";
import { SHERLOCK_VERSION } from "../mod.ts";
import { sitesCount } from "../sites.ts";

Deno.test("cli.ts: parseArguments() parses all arguments correctly", () => {
  assertEquals(
    parseArguments(["--help"]),
    { _: [], all: false, a: false, help: true },
  );
  assertEquals(
    parseArguments(["-a", "-f=json"]),
    { _: [], all: true, a: true, f: "json", format: "json" },
  );
  assertEquals(
    parseArguments(["-a", "-f=csv", "checkerschaf"]),
    { _: ["checkerschaf"], all: true, a: true, f: "csv", format: "csv" },
  );
});

Deno.test("cli.ts: readCliArguments() parses all arguments correctly", async () => {
  assertEquals(
    await readCliArguments(["-a", "-f=csv", "checkerschaf"]),
    {
      format: "csv",
      realtimeOutput: false,
      showAll: true,
      timeout: 30,
      username: "checkerschaf",
    },
  );
});

Deno.test("cli.ts: getShowVersionStr() contains the project version and the amount of active sites", () => {
  const versionStr = getShowVersionStr();
  assertStringIncludes(versionStr, `version`);
  assertStringIncludes(versionStr, `${SHERLOCK_VERSION}`);
  assertStringIncludes(versionStr, `sites`);
  assertStringIncludes(versionStr, `${sitesCount}`);
});

Deno.test("cli.ts: getShowHelpStr() contains the project version and the amount of active sites", () => {
  const helpStr = getShowHelpStr();
  assertStringIncludes(helpStr, `--help`);
  assertStringIncludes(helpStr, `--version`);
  assertStringIncludes(helpStr, `--all`);
  assertStringIncludes(helpStr, `--timeout`);
  assertStringIncludes(helpStr, `--format`);
  assertStringIncludes(helpStr, `Examples`);
});
