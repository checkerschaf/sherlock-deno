import {
  checkResponseUrl,
  checkStatusCode,
  checkStatusMessage,
  responseIsUserPage,
} from "./response-checker.ts";
import { ScannerResult } from "./enums.ts";
import { getSiteUserUrl } from "./lib/fetcher.ts";
import { assertEquals } from "std/testing/asserts.ts";
import {
  siteRedirect,
  siteStatusCode,
  siteStatusMessage,
  successResponse,
  testUsername,
} from "./testing-helpers.ts";

Deno.test(
  "response-checker.ts: checkStatusCode() - success if status is 200",
  async () => {
    assertEquals(
      await checkStatusCode(successResponse()),
      ScannerResult.SUCCESS,
    );
  },
);

Deno.test(
  "response-checker.ts: checkStatusCode() - error if status is 500-599",
  async () => {
    assertEquals(
      await checkStatusCode(
        new Response("This is a successful test", {
          status: 502,
        }),
      ),
      ScannerResult.ERROR,
    );
  },
);

Deno.test(
  "response-checker.ts: checkStatusCode() - not found if status is not 200 and not 500",
  async () => {
    assertEquals(
      await checkStatusCode(
        new Response("This is a successful test", {
          status: 404,
        }),
      ),
      ScannerResult.NOT_FOUND,
    );
  },
);

Deno.test(
  "response-checker.ts: checkStatusMessage() - success if body does not contain an error message",
  async () => {
    assertEquals(
      await checkStatusMessage({
        response: successResponse(),
        site: siteStatusMessage,
        username: testUsername,
      }),
      ScannerResult.SUCCESS,
    );
  },
);

Deno.test(
  "response-checker.ts: checkStatusMessage() - not found if body contains an error message",
  async () => {
    assertEquals(
      await checkStatusMessage({
        response: new Response(
          "This is an error test. User not found text included",
          {
            status: 200,
          },
        ),
        site: siteStatusMessage,
        username: testUsername,
      }),
      ScannerResult.NOT_FOUND,
    );
  },
);

Deno.test(
  "response-checker.ts: checkResponseUrl() - success if url is not the error url",
  async () => {
    assertEquals(
      await checkResponseUrl({
        response: successResponse(),
        site: siteRedirect,
        username: testUsername,
        url: getSiteUserUrl(siteRedirect, testUsername),
      }),
      ScannerResult.SUCCESS,
    );
  },
);

Deno.test(
  "response-checker.ts: checkResponseUrl() - not found if url is the error url",
  async () => {
    assertEquals(
      await checkResponseUrl({
        response: successResponse(),
        site: siteRedirect,
        username: testUsername,
      }),
      ScannerResult.NOT_FOUND,
    );
  },
);

Deno.test(
  "response-checker.ts: responseIsUserPage() - can select the check method based on the site",
  async () => {
    // Status Code
    assertEquals(
      await responseIsUserPage({
        response: successResponse(),
        site: siteStatusCode,
        username: testUsername,
      }),
      ScannerResult.SUCCESS,
    );

    // Status Message
    assertEquals(
      await responseIsUserPage({
        response: successResponse(),
        site: siteStatusMessage,
        username: testUsername,
      }),
      ScannerResult.SUCCESS,
    );

    // Redirect
    assertEquals(
      await responseIsUserPage({
        response: successResponse(),
        site: siteRedirect,
        username: testUsername,
        url: getSiteUserUrl(siteRedirect, testUsername),
      }),
      ScannerResult.SUCCESS,
    );
  },
);
