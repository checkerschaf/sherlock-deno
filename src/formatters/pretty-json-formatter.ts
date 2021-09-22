import { JsonFormatter } from "./json-formatter.ts";
import type { FormatterOnFinishOptions } from "./formatter.ts";
import type { SiteResult } from "../types.ts";

export class PrettyJsonFormatter extends JsonFormatter {
  onInit(): void {}
  onStart(): void {}
  onResult(_siteResult: SiteResult): void {}

  onFinish(options: FormatterOnFinishOptions): void {
    this.exportResultsAsJson(options, { prettyPrint: true });
  }
}
