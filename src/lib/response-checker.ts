import { Site, SiteErrorType } from "../types.ts";
import { ScannerResult } from "../enums.ts";
import { getSiteUserUrl } from "./fetcher.ts";

const responseIsUserPage = async (
  response: Response,
  site: Site,
  username: string,
): Promise<ScannerResult> => {
  switch (site.errorType) {
    case SiteErrorType.message:
      return checkStatusMessage(response, site, username);
    case SiteErrorType.response_url:
      return checkResponseUrl(response, site, username);
    case SiteErrorType.status_code:
      return checkStatusCode(response);
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
  await response.arrayBuffer();
  if (response.status === 200) return ScannerResult.SUCCESS;
  if (response.status >= 500 && response.status <= 599) {
    return ScannerResult.ERROR;
  }
  return ScannerResult.NOT_FOUND;
};

const checkStatusMessage = async (
  response: Response,
  site: Site,
  username: string,
): Promise<ScannerResult> => {
  const pageContent = await getPageContent(response);

  if (
    pageContent.includes(site.errorMsg || "not found")
  ) {
    return ScannerResult.NOT_FOUND;
  }

  return pageContent.toLowerCase().includes(username.toLowerCase())
    ? ScannerResult.SUCCESS
    : ScannerResult.NOT_FOUND;
};

const checkResponseUrl = async (
  response: Response,
  site: Site,
  username: string,
): Promise<ScannerResult> => {
  const pageContent = await getPageContent(response);

  if (
    response.url !==
      getSiteUserUrl(site, username)
  ) {
    return ScannerResult.NOT_FOUND;
  }

  if (!pageContent.includes(username)) {
    return ScannerResult.NOT_FOUND;
  }

  return ScannerResult.SUCCESS;
};

export {
  responseIsUserPage,
  checkResponseUrl,
  checkStatusCode,
  checkStatusMessage,
};
