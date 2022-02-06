import {
  fetchSite,
  fetchWithTimeout,
  getSiteUserUrl,
  replaceUsernameInUrl,
} from "./fetcher.ts";
import { sites } from "../../sites.ts";
import {
  assertEquals,
  assertStringIncludes,
  Stub,
  stub,
} from "../testing-deps.ts";
import { siteStatusCode, testUsername } from "../testing-helpers.ts";
import { ScannerResult } from "../enums.ts";

const githubPromise = () =>
  new Promise((resolve) =>
    resolve(
      new Response("This is the sherlock-deno GitHub page from checkerschaf!", {
        status: 200,
      })
    )
  );

Deno.test(
  "fetcher.ts: replaceUsernameInUrl() - replaces an url placeholder with the username",
  () => {
    assertEquals(
      replaceUsernameInUrl(siteStatusCode.url, testUsername),
      "http://localhost/users/checkerschaf/hello"
    );
  }
);

Deno.test(
  "fetcher.ts: getSiteUserUrl() - replaces a site url placeholder with the username",
  () => {
    assertEquals(
      getSiteUserUrl(siteStatusCode, testUsername),
      "http://localhost/users/checkerschaf/hello"
    );
  }
);

Deno.test(
  "fetcher.ts: fetchWithTimeout() can get the response of a site",
  async () => {
    const fetchStub: Stub<Window & typeof globalThis> = stub(self, "fetch", [
      githubPromise(),
    ]);

    try {
      const response = await fetchWithTimeout(
        "https://github.com/checkerschaf/sherlock-deno"
      );
      assertEquals(response.status, 200);

      const content = await response.text();
      assertStringIncludes(content, "sherlock-deno");
    } finally {
      fetchStub.restore();
    }
  }
);

Deno.test(
  "fetcher.ts: fetchSite() does NOT prepend a proxy url by default",
  async () => {
    const fetchStub: Stub<Window & typeof globalThis> = stub(self, "fetch", [
      githubPromise(),
    ]);

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
  }
);

Deno.test("fetcher.ts: fetchSite() can append proxy headers", async () => {
  const fetchStub: Stub<Window & typeof globalThis> = stub(self, "fetch", [
    githubPromise(),
  ]);

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

Deno.test(
  "fetcher.ts: fetchSite() does prepend a proxy url if provided",
  async () => {
    const fetchStub: Stub<Window & typeof globalThis> = stub(self, "fetch", [
      githubPromise(),
    ]);

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
  }
);

Deno.test(
  "fetcher.ts: getSiteResult() - gets the scanner result of a site (GitHub)",
  async () => {
    const fetchStub: Stub<Window & typeof globalThis> = stub(
      globalThis,
      "fetch",
      [githubPromise()]
    );

    try {
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
        }
      );
    } finally {
      fetchStub.restore();
    }
  }
);
