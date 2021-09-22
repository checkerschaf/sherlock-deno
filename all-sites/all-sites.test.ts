import { fetchSite } from "../src/lib/fetcher.ts";
import { sites } from "../sites.ts";
import { assert } from "../src/testing-deps.ts";
import { ScannerResult } from "../src/enums.ts";

const generateRandomString = (strLength = 16) => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < strLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const testSite = (siteName: string) => {
  const site = sites[siteName];

  // Deno.test({
  //   name: `site ${siteName}: a claimed username results in SUCCESS`,
  //   fn: async () => {
  //     assertEquals(
  //       (
  //         await fetchSite({
  //           site,
  //           siteName,
  //           username: getClaimedUsername(site),
  //         })
  //       ).result,
  //       ScannerResult.SUCCESS
  //     );
  //   },
  // });

  Deno.test({
    name:
      `site ${siteName}: an unclaimed username results in NOT_FOUND or ERROR`,
    fn: async () => {
      assert(
        (
          await fetchSite({
            site,
            siteName,
            username: generateRandomString(),
          })
        ).result !== ScannerResult.SUCCESS,
      );
    },
  });
};

Object.keys(sites).map((siteName) => {
  testSite(siteName);
});
