import { assertStringIncludes, Stub, stub } from "./testing-deps.ts";
import {
  printFatalError,
  printSherlockDeno,
  printSiteResult,
} from "./printer.ts";
import { SHERLOCK_VERSION } from "../mod.ts";
import { sitesCount } from "../sites.ts";
import { ScannerResult } from "./enums.ts";
import { siteStatusCode } from "./testing-helpers.ts";
import { c } from "./deps.ts";

const createConsoleStub = (method = "log"): Stub<Console> => {
  return stub(
    console,
    method,
  );
};

Deno.test("printer.ts: printSherlockDeno() prints a beautiful ASCII art to the console", () => {
  const consoleStub = createConsoleStub();
  try {
    printSherlockDeno();
    const consoleCallArgs = consoleStub.calls[0]?.args[0];
    assertStringIncludes(consoleCallArgs, `Version: ${SHERLOCK_VERSION}`);
    assertStringIncludes(consoleCallArgs, `Sites: ${sitesCount}`);
    assertStringIncludes(consoleCallArgs, "checkerschaf");
  } finally {
    consoleStub.restore();
  }
});

Deno.test("printer.ts: printFatalError() prints a beautified error message", () => {
  const consoleStub = createConsoleStub();
  try {
    printFatalError(new Error("checkerschaf is a sheep"));
    const consoleCallArgs = consoleStub.calls[0]?.args[0];
    assertStringIncludes(consoleCallArgs, `Fatal error`);
    assertStringIncludes(consoleCallArgs, "checkerschaf is a sheep");
  } finally {
    consoleStub.restore();
  }
});

Deno.test("printer.ts: printSiteResult() prints a SUCCESS result", () => {
  const consoleStub = createConsoleStub();
  try {
    printSiteResult(
      {
        result: ScannerResult.SUCCESS,
        site: siteStatusCode,
        url: siteStatusCode.url,
      },
      "Demo Site",
    );
    const consoleCallArgs = consoleStub.calls[0]?.args[0];
    assertStringIncludes(consoleCallArgs, `+`);
    assertStringIncludes(consoleCallArgs, c.green("Demo Site"));
    assertStringIncludes(consoleCallArgs, siteStatusCode.url);
  } finally {
    consoleStub.restore();
  }
});

Deno.test("printer.ts: printSiteResult() prints a NOT_FOUND result", () => {
  const consoleStub = createConsoleStub();
  try {
    printSiteResult(
      {
        result: ScannerResult.NOT_FOUND,
        site: siteStatusCode,
        url: siteStatusCode.url,
      },
      "Demo Site",
    );
    const consoleCallArgs = consoleStub.calls[0]?.args[0];
    assertStringIncludes(consoleCallArgs, c.red("-"));
    assertStringIncludes(consoleCallArgs, c.gray("Demo Site"));
  } finally {
    consoleStub.restore();
  }
});

Deno.test("printer.ts: printSiteResult() prints an ERROR result", () => {
  const consoleStub = createConsoleStub();
  try {
    printSiteResult(
      {
        result: ScannerResult.ERROR,
        site: siteStatusCode,
        url: siteStatusCode.url,
        error: "Example Error",
      },
      "Demo Site",
    );
    const consoleCallArgs = consoleStub.calls[0]?.args[0];
    assertStringIncludes(consoleCallArgs, c.red("-"));
    assertStringIncludes(consoleCallArgs, c.red("Demo Site"));
    assertStringIncludes(consoleCallArgs, "Example Error");
  } finally {
    consoleStub.restore();
  }
});
