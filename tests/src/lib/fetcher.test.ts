import {
  fetchTimeout,
  getSiteResult,
  getSiteUserUrl,
  replaceUsernameInUrl,
} from "../../../src/lib/fetcher.ts";
import { sites } from "../../../sites.ts";
import { ScannerResult } from "../../../src/enums.ts";
import {
  assertEquals,
  assertStringContains,
  Stub,
  stub,
} from "../../testing-deps.ts";
import { siteStatusCode, testUsername } from "../../testing-helpers.ts";

const githubPromise = new Promise((resolve) =>
  resolve(
    new Response(
      "This is the sherlock-deno GitHub page from checkerschaf!",
      { status: 200 },
    ),
  )
);

Deno.test("fetcher.ts: replaceUsernameInUrl() - replaces an url placeholder with the username", async () => {
  assertEquals(
    replaceUsernameInUrl(siteStatusCode.url, testUsername),
    "http://localhost/users/checkerschaf/hello",
  );
});

Deno.test("fetcher.ts: getSiteUserUrl() - replaces a site url placeholder with the username", async () => {
  assertEquals(
    getSiteUserUrl(siteStatusCode, testUsername),
    "http://localhost/users/checkerschaf/hello",
  );
});

Deno.test("fetcher.ts: fetchTimeout() can get the response of a site", async () => {
  const fetchStub: Stub<Window & typeof globalThis> = stub(
    self,
    "fetch",
    [githubPromise],
  );

  try {
    const response = await fetchTimeout(
      "https://github.com/checkerschaf/sherlock-deno",
    );
    assertEquals(response.status, 200);

    const content = await response.text();
    assertStringContains(content, "sherlock-deno");
  } finally {
    fetchStub.restore();
  }
});

Deno.test("fetcher.ts: getSiteResult() - gets the scanner result of a site (GitHub)", async () => {
  const fetchStub: Stub<Window & typeof globalThis> = stub(
    self,
    "fetch",
    [githubPromise],
  );

  try {
    const site = sites["GitHub"];
    assertEquals(
      await getSiteResult(sites["GitHub"], testUsername),
      {
        result: ScannerResult.SUCCESS,
        site,
        url: getSiteUserUrl(site, testUsername),
      },
    );
  } finally {
    fetchStub.restore();
  }
});
