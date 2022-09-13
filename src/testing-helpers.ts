import type { Site } from "../src/types.ts";
import { SiteErrorType } from "../src/enums.ts";
import { Stub } from "std/testing/mock.ts";
import { stub } from "std/testing/mock.ts";

export const createConsoleStub = (
  method: keyof Console = "log",
): Stub => {
  return stub(console, method);
};

const testUsername = "checkerschaf";

const successResponse = () => {
  return new Response(
    "This is a successful test with a page from checkerschaf",
    {
      status: 200,
      headers: {},
    },
  );
};

const url = "http://localhost/users/{}/hello";
const siteStatusCode: Site = {
  url,
  errorType: SiteErrorType.STATUS_CODE,
  // deno-lint-ignore camelcase
  username_claimed: testUsername,
};
const siteStatusMessage: Site = {
  url,
  errorType: SiteErrorType.MESSAGE,
  errorMsg: "User not found",
  // deno-lint-ignore camelcase
  username_claimed: testUsername,
};
const siteRedirect: Site = {
  url,
  errorType: SiteErrorType.RESPONSE_URL,
  errorUrl: "http://localhost/redirect-to-error",
  // deno-lint-ignore camelcase
  username_claimed: testUsername,
};

export {
  siteRedirect,
  siteStatusCode,
  siteStatusMessage,
  successResponse,
  testUsername,
};
