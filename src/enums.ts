export enum OutputFormat {
  JSON = "JSON",
  PRETTY_JSON = "PRETTY_JSON",
  CSV = "CSV",
}

export enum ScannerResult {
  ERROR = "ERROR",
  NOT_FOUND = "NOT_FOUND",
  SUCCESS = "SUCCESS",
}

export enum SiteErrorType {
  status_code = "status_code",
  message = "message",
  response_url = "response_url",
}
