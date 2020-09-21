import {
  getShowHelpStr,
  getShowVersionStr,
  parseArguments,
  readCliArguments,
} from "../../src/cli.ts";
import { assertEquals, assertStringContains } from "../testing-deps.ts";
import { SHERLOCK_VERSION } from "../../mod.ts";
import { sitesCount } from "../../sites.ts";

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
  assertStringContains(versionStr, `version`);
  assertStringContains(versionStr, `${SHERLOCK_VERSION}`);
  assertStringContains(versionStr, `sites`);
  assertStringContains(versionStr, `${sitesCount}`);
});

Deno.test("cli.ts: getShowHelpStr() contains the project version and the amount of active sites", () => {
  const helpStr = getShowHelpStr();
  assertStringContains(helpStr, `--help`);
  assertStringContains(helpStr, `--version`);
  assertStringContains(helpStr, `--all`);
  assertStringContains(helpStr, `--timeout`);
  assertStringContains(helpStr, `--format`);
  assertStringContains(helpStr, `Examples`);
});
