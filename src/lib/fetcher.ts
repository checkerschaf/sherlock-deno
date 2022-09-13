import { ScannerResult } from "../enums.ts";
import type { ProxyConfig, Site, SiteResult } from "../types.ts";
import { responseIsUserPage } from "../response-checker.ts";

export const fetchSite = async ({
  site,
  siteName,
  username,
  timeout = 10000,
  proxyConfig,
}: {
  site: Site;
  siteName: string;
  username: string;
  timeout?: number;
  proxyConfig?: ProxyConfig;
}): Promise<SiteResult> => {
  const userPageUrl = getSiteUserUrl(site, username);
  const siteResult = { site, siteName, url: userPageUrl, username };

  try {
    const urlToFetch = (proxyConfig?.url || "") + userPageUrl;
    const response = await fetch(urlToFetch, {
      signal: AbortSignal.timeout(timeout),
      headers: new Headers({
        "Accept-Language": "en-US,en",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
        ...proxyConfig?.headers,
      }),
    });
    return {
      ...siteResult,
      result: await responseIsUserPage({ response, site, username }),
    };
  } catch (error) {
    const isDenoRuntime = "Deno" in window;
    // Process has insuficient permissions
    if (isDenoRuntime && error instanceof Deno.errors.PermissionDenied) {
      throw new Error(
        "Permission error. Try again with the --allow-net flag. Learn more: https://deno.land/manual/getting_started/permissions#network-access",
      );
    }

    // Request was aborted by the timeout
    if (
      error instanceof DOMException &&
      error.name === "TimeoutError"
    ) {
      return {
        ...siteResult,
        result: ScannerResult.ERROR,
        error: "Timeout",
      };
    }

    // Generic http error
    return {
      ...siteResult,
      result: ScannerResult.ERROR,
      error: error.name || "",
    };
  }
};

export const getSiteUserUrl = (site: Site, username: string): string => {
  return replaceUsernameInUrl(site.urlProbe || site.url, username);
};

export const replaceUsernameInUrl = (url: string, username: string): string => {
  return url.replace("{}", username);
};
