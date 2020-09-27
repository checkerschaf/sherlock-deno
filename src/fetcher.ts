import { ScannerResult } from "./enums.ts";
import type { Site, SiteResult } from "./types.ts";
import { responseIsUserPage } from "./response-checker.ts";

export class TimeoutError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "TimeoutError";
  }
}

export const fetchTimeout = (
  input: RequestInfo,
  timeout = 10000,
  init?: RequestInit,
): Promise<Response> => {
  const abortController = new AbortController();

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      abortController.abort();
      reject(new TimeoutError("Request timed out"));
    }, timeout);

    fetch(input, { signal: abortController.signal, ...init })
      .then(resolve)
      .catch(reject)
      .finally(
        () => clearTimeout(timeoutId),
      );
  });
};

export const getSiteUserUrl = (site: Site, username: string): string => {
  return replaceUsernameInUrl(site.urlProbe ?? site.url, username);
};

export const replaceUsernameInUrl = (url: string, username: string): string => {
  return url.replace("{}", username);
};

export const getSiteResult = async (
  site: Site,
  username: string,
  timeout = 10000,
): Promise<SiteResult> => {
  const userPageUrl = getSiteUserUrl(site, username);
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
      throw new Error(
        "Permission error. Try again with the --allow-net flag. Learn more: https://deno.land/manual/getting_started/permissions#network-access",
      );
    }
    return {
      site,
      url: userPageUrl,
      result: ScannerResult.ERROR,
      error: error instanceof TimeoutError ? "Timeout" : "Http Error",
    };
  }
};
