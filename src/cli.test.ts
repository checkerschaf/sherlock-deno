import { afterEach, beforeEach, describe, it } from "std/testing/bdd.ts";
import {
  parseArguments,
  readCliArguments,
  showHelpMessage,
  showVersionMessage,
} from "./cli.ts";
import { assertEquals, assertStringIncludes } from "std/testing/asserts.ts";
import type { Stub } from "std/testing/mock.ts";
import { SHERLOCK_VERSION } from "../mod.ts";
import { sitesCount } from "../sites.ts";
import { ConsoleFormatter } from "./formatters/console-formatter.ts";
import { createConsoleStub } from "./testing-helpers.ts";

describe("CLI", () => {
  let consoleStub: Stub<Console>;

  beforeEach(() => {
    consoleStub = createConsoleStub();
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it("parseArguments() parses all arguments correctly", () => {
    assertEquals(parseArguments(["--help"]), {
      _: [],
      all: false,
      help: true,
      h: true,
    });

    assertEquals(parseArguments(["-a", "-f=json"]), {
      _: [],
      a: true,
      all: true,
      f: "json",
      format: "json",
    });

    assertEquals(parseArguments(["-a", "-f=csv", "checkerschaf"]), {
      _: ["checkerschaf"],
      a: true,
      all: true,
      f: "csv",
      format: "csv",
    });
  });

  describe("readCliArguments", () => {
    it("parses default arguments correctly", () => {
      assertEquals(readCliArguments(["checkerschaf"]), {
        formatter: new ConsoleFormatter(),
        timeout: 30,
        username: "checkerschaf",
      });
    });

    it("parses show all argument correctly", () => {
      assertEquals(readCliArguments(["-a", "checkerschaf"]), {
        formatter: new ConsoleFormatter({ showAll: true }),
        timeout: 30,
        username: "checkerschaf",
      });
    });
  });

  it("showVersionMessage() contains the project version and the amount of active sites", () => {
    showVersionMessage();

    assertEquals(consoleStub.calls.length, 1);

    const versionStr = consoleStub.calls[0].args[0];
    assertStringIncludes(versionStr, `version`);
    assertStringIncludes(versionStr, `${SHERLOCK_VERSION}`);
    assertStringIncludes(versionStr, `sites`);
    assertStringIncludes(versionStr, `${sitesCount}`);
  });

  it("showHelpMessage() contains the project version and the amount of active sites", () => {
    showHelpMessage();

    assertEquals(consoleStub.calls.length, 1);

    const helpStr = consoleStub.calls[0].args[0];
    assertStringIncludes(helpStr, `--help`);
    assertStringIncludes(helpStr, `--version`);
    assertStringIncludes(helpStr, `--all`);
    assertStringIncludes(helpStr, `--timeout`);
    assertStringIncludes(helpStr, `--format`);
    assertStringIncludes(helpStr, `Examples`);
  });
});
