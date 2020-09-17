import { Site, SiteErrorType } from "./types.ts";

export {
  assertEquals,
  assertStringContains,
} from "https://deno.land/std@0.69.0/testing/asserts.ts";

export {
  FakeTime,
} from "https://deno.land/x/mock@v0.6.1/time.ts";

export type {
  Stub,
} from "https://deno.land/x/mock@v0.6.1/stub.ts";

export {
  stub,
} from "https://deno.land/x/mock@v0.6.1/stub.ts";

// --- Commonly used stuff for testing ---
const testUsername = "checkerschaf";

const successResponse = new Response(
  "This is a successful test with a page from checkerschaf",
  {
    status: 200,
  },
);

const url = "http://localhost/users/{}";
const siteStatusCode: Site = {
  url,
  errorType: SiteErrorType.status_code,
};
const siteStatusMessage: Site = {
  url,
  errorType: SiteErrorType.message,
  errorMsg: "User not found",
};
const siteRedirect: Site = {
  url,
  errorType: SiteErrorType.response_url,
  errorUrl: "http://localhost/redirect-to-error",
};

export {
  successResponse,
  testUsername,
  siteStatusCode,
  siteStatusMessage,
  siteRedirect,
};
