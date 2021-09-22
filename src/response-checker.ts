import type { Site } from "./types.ts";
import { ScannerResult, SiteErrorType } from "./enums.ts";
import { getSiteUserUrl } from "./lib/fetcher.ts";

const responseIsUserPage = ({
  response,
  site,
  username,
  url = response.url,
}: {
  response: Response;
  site: Site;
  username: string;
  url?: string;
}): Promise<ScannerResult> => {
  switch (site.errorType) {
    case SiteErrorType.MESSAGE:
      return checkStatusMessage({ response, site, username });
    case SiteErrorType.RESPONSE_URL:
      return checkResponseUrl({ response, site, username, url });
    case SiteErrorType.STATUS_CODE:
    default:
      return checkStatusCode(response);
  }
};

const getPageContent = async (response: Response): Promise<string> => {
  const contentType = response.headers.get("content-type") || "charset=utf-8";
  const charset = contentType.match(/charset=([a-zA-Z0-9-]+)/)?.[1] || "utf-8";
  const decoder = new TextDecoder(charset);
  const dataView = new DataView(await response.arrayBuffer());
  return decoder.decode(dataView);
};

const checkStatusCode = async (response: Response): Promise<ScannerResult> => {
  await getPageContent(response);
  if (response.status === 200) return ScannerResult.SUCCESS;
  if (
    (response.status >= 500 && response.status <= 599) ||
    response.status === 403
  ) {
    return ScannerResult.ERROR;
  }
  return ScannerResult.NOT_FOUND;
};

const checkStatusMessage = async ({
  response,
  site,
  username,
}: {
  response: Response;
  site: Site;
  username: string;
}): Promise<ScannerResult> => {
  const pageContent = await getPageContent(response);

  if (
    pageContent.includes(
      (site.errorMsg instanceof Array ? site.errorMsg[0] : site.errorMsg) ||
        "not found",
    )
  ) {
    return ScannerResult.NOT_FOUND;
  }

  return pageContent.toLowerCase().includes(username.toLowerCase())
    ? ScannerResult.SUCCESS
    : ScannerResult.NOT_FOUND;
};

const checkResponseUrl = async ({
  response,
  site,
  username,
  url = response.url,
}: {
  response: Response;
  site: Site;
  username: string;
  url?: string;
}): Promise<ScannerResult> => {
  const pageContent = await getPageContent(response);

  if (url !== getSiteUserUrl(site, username)) {
    return ScannerResult.NOT_FOUND;
  }

  if (!pageContent.includes(username)) {
    return ScannerResult.NOT_FOUND;
  }

  return ScannerResult.SUCCESS;
};

export {
  checkResponseUrl,
  checkStatusCode,
  checkStatusMessage,
  responseIsUserPage,
};
