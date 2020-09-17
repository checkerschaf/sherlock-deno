import { OutputFormat, ScannerResult } from "./enums.ts";

export type ScannerOptions = {
  username: string;
  onlyMatching?: boolean;
  realtimeOutput?: boolean;
  timeout: number;
  format?: OutputFormat | string;
};

export type SiteResult = {
  site: Site;
  url: string;
  result: ScannerResult;
  error?: string;
};

export enum SiteErrorType {
  status_code = "status_code",
  message = "message",
  response_url = "response_url",
}

export type Site = {
  url: string;
  urlMain: string;
  errorType: SiteErrorType | string;
  errorUrl?: string;
  urlProbe?: string;
  errorMsg?: string;
  regexCheck?: string;

  // Unused
  username_claimed: string;
  username_unclaimed: string;
  request_head_only?: boolean;
  noPeriod?: string;
  rank?: number;
  headers?: {
    "User-Agent"?: string;
  };
};

export type SiteList = {
  [name: string]: Site;
};
