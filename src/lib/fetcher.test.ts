import { fetchTimeout, getSiteResult, getUserUrl } from "./fetcher.ts";
import {
  assertEquals,
  assertStringContains,
  Stub,
  stub,
  testUsername,
} from "../deps-testing.ts";
import { sites } from "../sites.ts";
import { ScannerResult } from "../enums.ts";

const githubPromise = new Promise((resolve) =>
  resolve(
    new Response(
      "This is the sherlock-deno GitHub page from checkerschaf!",
      { status: 200 },
    ),
  )
);

Deno.test("fetcher.ts: getUserUrl() - replaces a site url placeholder with the username", async () => {
  assertEquals(
    getUserUrl("http://localhost/this/is/{}/special/page", testUsername),
    "http://localhost/this/is/checkerschaf/special/page",
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
        url: getUserUrl(site.url, testUsername),
      },
    );
  } finally {
    fetchStub.restore();
  }
});
