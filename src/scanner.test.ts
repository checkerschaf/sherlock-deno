import { describe, it } from "std/testing/bdd.ts";
import { SherlockScanner } from "./sherlock-scanner.ts";
import { assertEquals, assertThrows } from "std/testing/asserts.ts";
import { spy } from "std/testing/mock.ts";
import { ConsoleFormatter } from "./formatters/console-formatter.ts";
import { testUsername } from "./testing-helpers.ts";
import { sites } from "../sites.ts";
import { ScannerResult } from "./enums.ts";

describe("Sherlock Scanner", () => {
  it("an invalid username throws an exception", () => {
    assertThrows(
      () => {
        new SherlockScanner({
          username: "checkerschaf?", // The question mark is the invalid character
          timeout: 10,
          formatter: new ConsoleFormatter(),
        });
      },
      Error,
      "Username contains invalid characters. Stopping.",
    );
    assertThrows(
      () => {
        new SherlockScanner({
          username: "checkerschaf&", // The ampersand is the invalid character
          timeout: 10,
          formatter: new ConsoleFormatter(),
        });
      },
      Error,
      "Username contains invalid characters. Stopping.",
    );
  });

  it("onSiteProcessed() method can be overwritten", () => {
    const scanner = new SherlockScanner({
      username: "checkerschaf",
      timeout: 1,
      formatter: new ConsoleFormatter(),
    });
    const spyOnSiteProcessed = spy();
    scanner.onSiteProcessed = spyOnSiteProcessed;

    assertEquals(spyOnSiteProcessed.calls.length, 0);

    const siteResult = {
      result: ScannerResult.SUCCESS,
      site: sites["GitHub"],
      siteName: "GitHub",
      url: "https://github.com/checkerschaf",
      username: testUsername,
    };
    scanner.onSiteProcessed(siteResult);

    assertEquals(spyOnSiteProcessed.calls.length, 1);
    assertEquals(spyOnSiteProcessed.calls.at(0)?.args, [siteResult]);
  });
});
