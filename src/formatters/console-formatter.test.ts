import { afterEach, beforeEach, describe, it } from "std/testing/bdd.ts";
import {
  createConsoleStub,
  siteStatusCode,
  testUsername,
} from "../testing-helpers.ts";
import { ConsoleFormatter } from "./console-formatter.ts";
import { ScannerResult } from "../enums.ts";
import { assertStringIncludes } from "std/testing/asserts.ts";
import { gray, green, red } from "std/fmt/colors.ts";
import type { Stub } from "std/testing/mock.ts";

describe("Console Formatter", () => {
  let consoleStub: Stub<Console>;

  beforeEach(() => {
    consoleStub = createConsoleStub();
  });

  afterEach(() => {
    consoleStub.restore();
  });

  describe("onResult", () => {
    it("prints a SUCCESS result", () => {
      const formatter = new ConsoleFormatter();
      formatter.onResult({
        result: ScannerResult.SUCCESS,
        site: siteStatusCode,
        url: siteStatusCode.url,
        siteName: "Demo Site",
        username: testUsername,
      });
      const consoleCallArgs = consoleStub.calls[0]?.args[0];
      assertStringIncludes(consoleCallArgs, `+`);
      assertStringIncludes(consoleCallArgs, green("Demo Site"));
      assertStringIncludes(consoleCallArgs, siteStatusCode.url);
    });

    it("prints a NOT_FOUND result", () => {
      const formatter = new ConsoleFormatter({ showAll: true });
      formatter.onResult({
        result: ScannerResult.NOT_FOUND,
        site: siteStatusCode,
        url: siteStatusCode.url,
        siteName: "Demo Site",
        username: testUsername,
      });
      const consoleCallArgs = consoleStub.calls[0]?.args[0];
      assertStringIncludes(consoleCallArgs, red("-"));
      assertStringIncludes(consoleCallArgs, gray("Demo Site"));
    });

    it("prints an ERROR result", () => {
      const formatter = new ConsoleFormatter({ showAll: true });
      formatter.onResult({
        result: ScannerResult.ERROR,
        site: siteStatusCode,
        url: siteStatusCode.url,
        error: "Example Error",
        siteName: "Demo Site",
        username: testUsername,
      });
      const consoleCallArgs = consoleStub.calls[0]?.args[0];
      assertStringIncludes(consoleCallArgs, red("-"));
      assertStringIncludes(consoleCallArgs, red("Demo Site"));
      assertStringIncludes(consoleCallArgs, "Example Error");
    });
  });
});
