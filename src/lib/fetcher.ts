import { ScannerResult } from "../enums.ts";
import { Site, SiteResult } from "../types.ts";
import { responseIsUserPage } from "./response-checker.ts";
import { printPermissionError } from "../printer.ts";

// TODO: use this version once https://github.com/denoland/deno/pull/6093 has been implemented
const fetchTimeout = (
  input: RequestInfo,
  timeout: number,
  init?: RequestInit,
) => {
  const controller = new AbortController();
  const promise = fetch(input, { signal: controller.signal, ...init });
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  return promise.finally(() => clearTimeout(timeoutId));
};

const getUserUrl = (url: string, username: string) => {
  return url.replace("{}", username);
};

const getSiteResult = async (
  site: Site,
  username: string,
  timeout = 10000,
): Promise<SiteResult> => {
  const userPageUrl = getUserUrl(site.url, username);
  try {
    const response = await fetchTimeout(userPageUrl, timeout, {
      headers: new Headers({
        "Accept-Language": "en-US,en",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
      }),
    });

    return {
      site,
      url: userPageUrl,
      result: await responseIsUserPage(response, site, username),
    };
  } catch (error) {
    if (error.name === "PermissionDenied") {
      printPermissionError();
      Deno.exit(1);
    }
    return {
      site,
      url: userPageUrl,
      result: ScannerResult.ERROR,
      error: "Http Error",
    };
  }
};

export { fetchTimeout, getSiteResult, getUserUrl };
