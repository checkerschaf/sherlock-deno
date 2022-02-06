import type { ScannerResult } from "./enums.ts";
import type { SiteErrorType } from "./enums.ts";
import { Formatter } from "./formatters/formatter.ts";

export type SherlockScannerOptions = {
  username: string;
  timeout: number;
  formatter: Formatter;
  proxyConfig?: ProxyConfig;
};

export type SiteResult = {
  site: Site;
  siteName: string;
  url: string;
  result: ScannerResult;
  username: string;
  error?: string;
};

export type Site = {
  url: string;
  urlProbe?: string;
  errorType: SiteErrorType | string;
  errorUrl?: string;
  errorMsg?: string | string[];
  // deno-lint-ignore camelcase
  username_claimed?: string;
  // deno-lint-ignore camelcase
  username_unclaimed?: string;

  // Unused site options
  regexCheck?: string;
  urlMain?: string;
  // deno-lint-ignore camelcase
  request_head_only?: boolean;
  noPeriod?: string;
  rank?: number;
  headers?: SiteHeaders;
};

type SiteHeaders = {
  [name: string]: string;
};

export type SiteList = {
  [name: string]: Site;
};

export type ProxyConfig = {
  url: string;
  headers?: HeadersInit;
};
