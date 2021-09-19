import type { OutputFormat, ScannerResult } from "./enums.ts";
import type { SiteErrorType } from "./enums.ts";

export type ScannerOptions = {
  username: string;
  showAll: boolean;
  timeout: number;
  realtimeOutput?: boolean;
  format?: OutputFormat | string;
};

export type SiteResult = {
  site: Site;
  url: string;
  result: ScannerResult;
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
};

export type SiteList = {
  [name: string]: Site;
};
