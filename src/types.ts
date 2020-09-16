import { OutputFormat, ScannerResult } from "./enums.ts";

export type ScannerOptions = {
  username: string;
  onlyMatching?: boolean;
  realtimeOutput?: boolean;
  timeout: number;
  format?: OutputFormat | string;
};

export type SiteResult = {
  site: string;
  url: string;
  result: ScannerResult;
  error?: string;
};

export type Sites = {
  [sites: string]: string;
};
