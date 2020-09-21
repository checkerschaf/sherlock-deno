import { Site, SiteErrorType } from "../src/types.ts";

const testUsername = "checkerschaf";

const successResponse = new Response(
  "This is a successful test with a page from checkerschaf",
  {
    status: 200,
  },
);

const url = "http://localhost/users/{}/hello";
const siteStatusCode: Site = {
  url,
  errorType: SiteErrorType.status_code,
  username_claimed: testUsername,
};
const siteStatusMessage: Site = {
  url,
  errorType: SiteErrorType.message,
  errorMsg: "User not found",
  username_claimed: testUsername,
};
const siteRedirect: Site = {
  url,
  errorType: SiteErrorType.response_url,
  errorUrl: "http://localhost/redirect-to-error",
  username_claimed: testUsername,
};

export {
  successResponse,
  testUsername,
  siteStatusCode,
  siteStatusMessage,
  siteRedirect,
};
