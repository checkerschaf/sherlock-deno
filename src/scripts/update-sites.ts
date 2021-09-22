import { c } from "../deps.ts";
import { SiteList } from "../types.ts";

const getSites = async (url: string): Promise<SiteList> => {
  return (await fetch(url)).json();
};

/**
 * This removes sites that are currently defined as "buggy" due to bugs in deno itself.
 * @param sites
 */
const removeBuggySites = (sites: SiteList): SiteList => {
  // These sites mostly require active JavaScript or are protected by CloudFlare
  const sitesToRemove = [
    "", // Placeholder
    "Alik.cz",
    "Atom Discussions",
    "Bandcamp",
    "Facebook",
    "Smashcast",
    "Spotify", // JavaScript
    "Strava",
    "WordPressOrg",
    "Zhihu",
    "kofi",
  ];

  for (const site of sitesToRemove) {
    delete sites[site];
  }

  return sites;
};

const patchSites = (sites: SiteList): SiteList => {
  // Placeholder to patch sites that are broken but easily patchable
  return sites;
};

// Get sites from original sherlock and remove buggy ones
let sites = await getSites(
  "https://raw.githubusercontent.com/sherlock-project/sherlock/master/sherlock/resources/data.json",
);
sites = removeBuggySites(sites);
sites = patchSites(sites);

// Write the new file
const fileName = "sites.ts";
await Deno.writeTextFile(
  `./${fileName}`,
  `/**
 * Please do NOT modify this file directly. This is an auto-generated file.
 * If you want to add or remove websites then please modify src/scripts/update-sites.ts instead.
 *
 * For details on how to run the update script please visit: https://github.com/checkerschaf/sherlock-deno#useful-development-commands
 */
import type { SiteList } from "./src/types.ts";

export const sites: SiteList = ${JSON.stringify(sites, null, 2)};

export const sitesCount = Object.keys(sites).length;
`,
);
console.log(
  c.green(
    `Successfully downloaded, patched and saved ${
      Object.keys(sites).length
    } sites to ${fileName}.`,
  ),
);

// Format the new file with "deno fmt"
console.log(c.green(`Running ${c.yellow(`deno fmt ${fileName}`)}...`));
await Deno.run({
  cmd: ["deno", "fmt", fileName],
}).status();
console.log(c.green(`${fileName} formatted successfully. Done.`));
