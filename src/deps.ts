import { OutputFormat } from "./enums.ts";

export {
  assert,
  assertArrayContains,
  assertEquals,
  assertMatch,
  assertNotEquals,
  assertStrictEquals,
  assertThrows,
  equal,
  unimplemented,
  unreachable,
} from "https://deno.land/std@0.69.0/testing/asserts.ts";

export {
  FakeTime,
} from "https://deno.land/x/mock@v0.6.1/time.ts";

export * as c from "https://deno.land/std@0.69.0/fmt/colors.ts";

import yargs from "https://deno.land/x/yargs@v16.0.3-deno/deno.ts";
import {
  Arguments,
  YargsType,
} from "https://deno.land/x/yargs@v16.0.3-deno/types.ts";
export { yargs, Arguments, YargsType };
export interface CliArguments extends Arguments {
  username?: string;
  onlyMatching?: boolean;
  realtimeOutput?: boolean;
  timeout?: number;
  format?: OutputFormat | string;
}
