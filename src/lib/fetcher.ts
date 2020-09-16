import { ScannerResult } from "../enums.ts";
import { SiteResult } from "../types.ts";

const fetchWithTimeout = (
  input: RequestInfo,
  timeout: number,
  init?: RequestInit,
): Promise<Response> => {
  return Promise.race([
    fetch(input, init),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]) as Promise<Response>;
};

const checkUsernameAtUrl = async (
  url: URL,
  username: string,
  timeout: number,
): Promise<ScannerResult> => {
  const response = await fetchWithTimeout(url.toString(), timeout, {
    redirect: "follow",
    headers: new Headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
    }),
  });

  if (response.status != 200) return ScannerResult.NOT_FOUND;

  const text = await response.text();
  return pageContainsUsername(text, username)
    ? ScannerResult.SUCCESS
    : ScannerResult.NOT_FOUND;
};

const pageContainsUsername = (data: string, username: string) => {
  return data.includes(username) && !data.includes("Not Found") &&
    !data.includes("Not found") && !data.includes("exist");
};

const getSiteResult = async (
  site: string,
  url: string,
  username: string,
  timeout = 10000,
): Promise<SiteResult> => {
  try {
    const result = await checkUsernameAtUrl(new URL(url), username, timeout);
    return {
      site,
      url: url.toString(),
      result,
    };
  } catch (error) {
    return {
      site,
      url: url.toString(),
      result: ScannerResult.ERROR,
      error,
    };
  }
};

export { checkUsernameAtUrl, fetchWithTimeout, getSiteResult };
