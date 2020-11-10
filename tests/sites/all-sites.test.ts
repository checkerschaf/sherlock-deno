import { getSiteResult } from "../../src/fetcher.ts";
import { sites } from "../../sites.ts";
import { assert } from "../testing-deps.ts";
import { ScannerResult } from "../../src/enums.ts";
import type { Site } from "../../src/types.ts";

const getClaimedUsername = (site: Site) => site.username_claimed ?? "JohnDoe";

const generateRandomString = (strLength = 12) => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < strLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const testSite = async (siteName: string) => {
  const site = sites[siteName];

  Deno.test(`site ${siteName}: a claimed username results in SUCCESS or ERROR`, async () => {
    assert(
      ((await getSiteResult(sites[siteName], getClaimedUsername(site)))
        .result) !==
        ScannerResult.NOT_FOUND,
    );
  });

  Deno.test(`site ${siteName}: an unclaimed username results in NOT_FOUND or ERROR`, async () => {
    assert(
      ((await getSiteResult(sites[siteName], generateRandomString()))
        .result) !==
        ScannerResult.SUCCESS,
    );
  });
};

Object.keys(sites).map(async (siteName) => {
  await testSite(siteName);
});
