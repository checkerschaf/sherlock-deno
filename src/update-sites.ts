import { c } from "./deps.ts";
import { SiteList } from "./types.ts";

const getSites = async (url: string): Promise<SiteList> => {
  const response = await fetch(url);
  return await response.json();
};

/**
 * This removes sites that are currently defined as "buggy" due to bugs in deno itself.
 * @param sites
 */
const removeBuggySites = (sites: SiteList): SiteList => {
  const sitesToRemove = [
    // TODO: reenable "WordPressOrg": "https://profiles.wordpress.org/{}/", in sites-old.json when https://github.com/denoland/deno/issues/7208 is fixed because of special character header
    "WordPressOrg",
    // TODO: reenable "Photobucket": "https://photobucket.com/user/{}/library", in sites-old.json when https://github.com/denoland/deno/issues/6465 is fixed because of HandshakeFailure in TLSv1_2
    "Photobucket",
    // These sites mostly require active JavaScript -> disable them
    "Facebook",
    "MixCloud",
    "Twitch",
    "Kik",
    "Docker Hub",
    "Twitter",
    "Nightbot",
    "radio_echo_msk",
    "Spotify",
    "RubyGems",
    "9GAG",
    "BinarySearch",
    // Other broken sites
    "Pling",
    "Championat",
    "YouNow",
    "Carbonmade",
    "ResearchGate",
    "Duolingo",
    "Taringa",
    "pr0gramm",
    "Polarsteps",
    "4pda",
    "Rate Your Music",
  ];

  for (let site of sitesToRemove) {
    delete sites[site];
  }

  return sites;
};

const patchSites = (sites: SiteList): SiteList => {
  // No sites to patch yet
  return sites;
};

// Get sites from original sherlock and remove buggy ones
let sites = await getSites(
  "https://raw.githubusercontent.com/sherlock-project/sherlock/master/sherlock/resources/data.json",
);
sites = removeBuggySites(sites);
sites = patchSites(sites);

// Write the new sites-old.json
await Deno.writeTextFile("./sites.json", JSON.stringify(sites, null, 4));
console.log(
  c.green(`Successfully written ${Object.keys(sites).length} to sites.json`),
);
