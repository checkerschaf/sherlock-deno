import Scanner from "./scanner.ts";
import { assertThrows } from "./testing-deps.ts";

Deno.test("scanner.ts: an invalid username throws an exception", () => {
  assertThrows(
    () => {
      new Scanner(
        {
          username: "checkerschaf?", // The question mark is the invalid character
          showAll: true,
          timeout: 10,
          realtimeOutput: true,
        },
      );
    },
    Error,
    "Username contains invalid characters. Stopping.",
  );
  assertThrows(
    () => {
      new Scanner(
        {
          username: "checkerschaf&", // The ampersand is the invalid character
          showAll: true,
          timeout: 10,
          realtimeOutput: true,
        },
      );
    },
    Error,
    "Username contains invalid characters. Stopping.",
  );
});

Deno.test("scanner.ts: the onSiteProcessed() method can be overwritten", () => {
});
