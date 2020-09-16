import { c } from "./deps";

interface Site {
  [key: string]: string;
}

const getSites = async (url: string): Promise<Site> => {
  const response = await fetch(url);
  const json = await response.json();
  const sites: Site = {};
  for (const site in json) {
    if (Object.prototype.hasOwnProperty.call(json, site)) {
      sites[site] = json[site].url;
    }
  }
  return sites;
};

/**
 * This removes sites that are currently defined as "buggy" due to bugs in deno itself.
 * @param sites
 */
const removeBuggySites = (sites: Site): Site => {
  // TODO: reenable "WordPressOrg": "https://profiles.wordpress.org/{}/", in sites-old.json when https://github.com/denoland/deno/issues/7208 is fixed because of special character header
  delete sites["WordPressOrg"];

  // TODO: reenable "Photobucket": "https://photobucket.com/user/{}/library", in sites-old.json when https://github.com/denoland/deno/issues/6465 is fixed because of HandshakeFailure in TLSv1_2
  delete sites["Photobucket"];

  // These sites are very slow and mostly time out. So let's remove them for now.
  delete sites["Pling"];
  delete sites["Championat"];

  return sites;
};

// Get sites from original sherlock and remove buggy ones
let sites = await getSites(
  "https://raw.githubusercontent.com/sherlock-project/sherlock/master/sherlock/resources/data.json",
);
sites = removeBuggySites(sites);

// Write the new sites-old.json
await Deno.writeTextFile("./sites.json", JSON.stringify(sites, null, 4));
console.log(
  c.green(`Successfully written ${Object.keys(sites).length} to sites.json`),
);
