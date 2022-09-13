import { afterEach, beforeEach, describe, it } from "std/testing/bdd.ts";
import { fetchSite, getSiteUserUrl, replaceUsernameInUrl } from "./fetcher.ts";
import { sites } from "../../sites.ts";
import { assertEquals } from "std/testing/asserts.ts";
import { returnsNext, stub } from "std/testing/mock.ts";
import type { Stub } from "std/testing/mock.ts";
import { siteStatusCode, testUsername } from "../testing-helpers.ts";
import { ScannerResult } from "../enums.ts";

const githubPromise = (): Promise<Response> =>
  new Promise((resolve) =>
    resolve(
      new Response("This is the sherlock-deno GitHub page from checkerschaf!", {
        status: 200,
      }),
    )
  );

describe({
  name: "Fetcher",
  // TODO: review in future Deno versions
  // This is needed because Deno currently doesn't clear internal resources and timers
  // for the helper function AbortSignal.timeout() used in fetcher.ts
  sanitizeOps: false,
  sanitizeResources: false,
  fn: () => {
    it("replaces an url placeholder with the username", () => {
      assertEquals(
        replaceUsernameInUrl(siteStatusCode.url, testUsername),
        "http://localhost/users/checkerschaf/hello",
      );
    });

    it("replaces a site url placeholder with the username", () => {
      assertEquals(
        getSiteUserUrl(siteStatusCode, testUsername),
        "http://localhost/users/checkerschaf/hello",
      );
    });

    describe("Fetching", () => {
      let fetchStub: Stub<Window & typeof globalThis>;

      beforeEach(() => {
        fetchStub = stub(self, "fetch", returnsNext([githubPromise()]));
      });

      afterEach(() => {
        fetchStub.restore();
      });

      it("getSiteResult() - gets the scanner result of a site (GitHub)", async () => {
        const site = sites["GitHub"];
        assertEquals(
          await fetchSite({
            site,
            siteName: "GitHub",
            username: testUsername,
          }),
          {
            result: ScannerResult.SUCCESS,
            site,
            siteName: "GitHub",
            url: getSiteUserUrl(site, testUsername),
            username: testUsername,
          },
        );
      });

      describe("Proxy", () => {
        it("fetchSite() does NOT prepend a proxy url by default", async () => {
          const site = sites["GitHub"];
          await fetchSite({
            site,
            siteName: "GitHub",
            username: testUsername,
          });

          const call = fetchStub.calls[0];

          const actualUrl = call.args[0];
          const expectedUrl = site.url.replace("{}", testUsername);
          assertEquals(actualUrl, expectedUrl);
        });

        it("fetchSite() can append proxy headers", async () => {
          const site = sites["GitHub"];
          const expectedProxyHeaders = {
            "x-show-me-please": "okay",
          };
          await fetchSite({
            site,
            siteName: "GitHub",
            username: testUsername,
            proxyConfig: {
              url: "doesnt matter",
              headers: expectedProxyHeaders,
            },
          });

          const call = fetchStub.calls[0];

          const actualHeaders: Headers = call.args[1].headers;
          const proxyHeaderIsPresent = actualHeaders.has("x-show-me-please");

          assertEquals(proxyHeaderIsPresent, true);
        });

        it("fetchSite() prepends a proxy url if provided", async () => {
          const site = sites["GitHub"];
          const proxyUrl = "INCLUDE ME PLEASE";
          const siteResult = await fetchSite({
            site,
            siteName: "GitHub",
            username: testUsername,
            proxyConfig: {
              url: proxyUrl,
            },
          });

          const call = fetchStub.calls[0];

          const actualUrl = call.args[0];
          const expectedUrl = proxyUrl + site.url.replace("{}", testUsername);
          assertEquals(actualUrl, expectedUrl);

          assertEquals(siteResult.site.url.includes(proxyUrl), false);
        });
      });
    });
  },
});
