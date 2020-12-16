import {
  checkResponseUrl,
  checkStatusCode,
  checkStatusMessage,
  responseIsUserPage,
} from "./response-checker.ts";
import { ScannerResult } from "./enums.ts";
import { getSiteUserUrl } from "./fetcher.ts";
import { assertEquals } from "./testing-deps.ts";
import {
  siteRedirect,
  siteStatusCode,
  siteStatusMessage,
  successResponse,
  testUsername,
} from "./testing-helpers.ts";

Deno.test("response-checker.ts: checkStatusCode() - success if status is 200", async () => {
  assertEquals(await checkStatusCode(successResponse), ScannerResult.SUCCESS);
});

Deno.test("response-checker.ts: checkStatusCode() - error if status is 500-599", async () => {
  assertEquals(
    await checkStatusCode(
      new Response("This is a successful test", {
        status: 502,
      }),
    ),
    ScannerResult.ERROR,
  );
});

Deno.test("response-checker.ts: checkStatusCode() - not found if status is not 200 and not 500", async () => {
  assertEquals(
    await checkStatusCode(
      new Response("This is a successful test", {
        status: 404,
      }),
    ),
    ScannerResult.NOT_FOUND,
  );
});

Deno.test("response-checker.ts: checkStatusMessage() - success if body does not contain an error message", async () => {
  assertEquals(
    await checkStatusMessage(
      successResponse,
      siteStatusMessage,
      testUsername,
    ),
    ScannerResult.SUCCESS,
  );
});

Deno.test("response-checker.ts: checkStatusMessage() - not found if body contains an error message", async () => {
  assertEquals(
    await checkStatusMessage(
      new Response("This is an error test. User not found text included", {
        status: 200,
      }),
      siteStatusMessage,
      testUsername,
    ),
    ScannerResult.NOT_FOUND,
  );
});

Deno.test("response-checker.ts: checkResponseUrl() - success if url is not the error url", async () => {
  assertEquals(
    await checkResponseUrl(
      <Response> {
        ...successResponse,
        url: getSiteUserUrl(siteRedirect, testUsername),
        arrayBuffer: successResponse.arrayBuffer,
      },
      siteRedirect,
      testUsername,
    ),
    ScannerResult.SUCCESS,
  );
});

Deno.test("response-checker.ts: checkResponseUrl() - not found if url is the error url", async () => {
  assertEquals(
    await checkResponseUrl(
      <Response> {
        ...successResponse,
        url: String(siteRedirect.errorUrl),
        arrayBuffer: successResponse.arrayBuffer,
      },
      siteRedirect,
      testUsername,
    ),
    ScannerResult.NOT_FOUND,
  );
});

Deno.test("response-checker.ts: responseIsUserPage() - can select the check method based on the site", async () => {
  // Status Code
  assertEquals(
    await responseIsUserPage(
      successResponse,
      siteStatusCode,
      testUsername,
    ),
    ScannerResult.SUCCESS,
  );

  // Status Message
  assertEquals(
    await responseIsUserPage(
      successResponse,
      siteStatusMessage,
      testUsername,
    ),
    ScannerResult.SUCCESS,
  );

  // Redirect
  assertEquals(
    await responseIsUserPage(
      <Response> {
        ...successResponse,
        url: getSiteUserUrl(siteRedirect, testUsername),
        arrayBuffer: successResponse.arrayBuffer,
      },
      siteRedirect,
      testUsername,
    ),
    ScannerResult.SUCCESS,
  );
});
