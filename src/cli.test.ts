import {
  parseArguments,
  readCliArguments,
  showHelpMessage,
  showVersionMessage,
} from "./cli.ts";
import { assertEquals, assertStringIncludes } from "./testing-deps.ts";
import { SHERLOCK_VERSION } from "../mod.ts";
import { sitesCount } from "../sites.ts";
import { ConsoleFormatter } from "./formatters/console-formatter.ts";
import { createConsoleStub } from "./testing-helpers.ts";

Deno.test("cli.ts: parseArguments() parses all arguments correctly", () => {
  assertEquals(parseArguments(["--help"]), {
    _: [],
    all: false,
    a: false,
    help: true,
    h: true,
  });
  assertEquals(parseArguments(["-a", "-f=json"]), {
    _: [],
    all: true,
    a: true,
    f: "json",
    format: "json",
  });
  assertEquals(parseArguments(["-a", "-f=csv", "checkerschaf"]), {
    _: ["checkerschaf"],
    all: true,
    a: true,
    f: "csv",
    format: "csv",
  });
});

Deno.test(
  "cli.ts: readCliArguments() parses default arguments correctly",
  () => {
    assertEquals(readCliArguments(["checkerschaf"]), {
      formatter: new ConsoleFormatter(),
      timeout: 30,
      username: "checkerschaf",
    });
  },
);

Deno.test(
  "cli.ts: readCliArguments() parses show all argument correctly",
  () => {
    assertEquals(readCliArguments(["-a", "checkerschaf"]), {
      formatter: new ConsoleFormatter({ showAll: true }),
      timeout: 30,
      username: "checkerschaf",
    });
  },
);

Deno.test(
  "cli.ts: showVersionMessage() contains the project version and the amount of active sites",
  () => {
    const consoleStub = createConsoleStub();

    try {
      showVersionMessage();

      assertEquals(consoleStub.calls.length, 1);

      const versionStr = consoleStub.calls[0].args[0];
      assertStringIncludes(versionStr, `version`);
      assertStringIncludes(versionStr, `${SHERLOCK_VERSION}`);
      assertStringIncludes(versionStr, `sites`);
      assertStringIncludes(versionStr, `${sitesCount}`);
    } finally {
      consoleStub.restore();
    }
  },
);

Deno.test(
  "cli.ts: showHelpMessage() contains the project version and the amount of active sites",
  () => {
    const consoleStub = createConsoleStub();

    try {
      showHelpMessage();

      assertEquals(consoleStub.calls.length, 1);

      const helpStr = consoleStub.calls[0].args[0];
      assertStringIncludes(helpStr, `--help`);
      assertStringIncludes(helpStr, `--version`);
      assertStringIncludes(helpStr, `--all`);
      assertStringIncludes(helpStr, `--timeout`);
      assertStringIncludes(helpStr, `--format`);
      assertStringIncludes(helpStr, `Examples`);
    } finally {
      consoleStub.restore();
    }
  },
);
