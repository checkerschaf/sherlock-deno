import { SherlockScanner } from "./sherlock-scanner.ts";
import { assertThrows } from "./testing-deps.ts";
import { ConsoleFormatter } from "./formatters/console-formatter.ts";

Deno.test("scanner.ts: an invalid username throws an exception", () => {
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

Deno.test(
  "scanner.ts: the onSiteProcessed() method can be overwritten",
  () => {},
);
