import { SHERLOCK_VERSION } from "../mod.ts";
import type { Args } from "std/flags/mod.ts";
import { parse } from "std/flags/mod.ts";
import { bold, cyan, green, red, yellow } from "std/fmt/colors.ts";
import { sites } from "../sites.ts";
import { Formatter } from "./formatters/formatter.ts";
import { ConsoleFormatter } from "./formatters/console-formatter.ts";
import { JsonFormatter } from "./formatters/json-formatter.ts";
import { CsvFormatter } from "./formatters/csv-formatter.ts";
import { PrettyJsonFormatter } from "./formatters/pretty-json-formatter.ts";
import type { SherlockScannerOptions } from "./types.ts";
import { sitesCount } from "../sites.ts";

export const readCliArguments = (
  argsInput = Deno.args,
): SherlockScannerOptions => {
  const args = parseArguments(argsInput);

  // Show help
  if (args.help) {
    printSherlockDenoAscii();
    showHelpMessage();
    Deno.exit();
  }

  // Show version
  if (args.version) {
    printSherlockDenoAscii();
    showVersionMessage();
    Deno.exit();
  }

  const formatter = getFormatterFromArguments(args);
  formatter.onInit();

  return {
    formatter,
    timeout: args.timeout ?? 30,
    username: parseUsername(args),
  };
};

export const parseArguments = (argsInput = Deno.args): Args => {
  return parse(argsInput, {
    boolean: ["all"],
    alias: {
      all: ["a"],
      timeout: ["t"],
      format: ["f"],
      help: ["h"],
      version: ["v"],
    },
  });
};

export const parseUsername = (args: Args): string => {
  if (args._?.length) return String(args._[0]);
  return prompt(green(bold(`[>] Input username: `))) ?? "";
};

export const getFormatterFromArguments = (args: Args): Formatter => {
  const showAll = !!args.all;
  switch (args.format || "console") {
    case "json":
      return new JsonFormatter({ showAll });
    case "pretty_json":
      return new PrettyJsonFormatter({ showAll });
    case "csv":
      return new CsvFormatter({ showAll });
    case "console":
    default:
      return new ConsoleFormatter({ showAll });
  }
};

export const printSherlockDenoAscii = (): void => {
  console.log(
    cyan(`
                                                                         ,_
   ███████╗██╗  ██╗███████╗██████╗ ██╗      ██████╗  ██████╗██╗  ██╗   ,'  \`\\,_
   ██╔════╝██║  ██║██╔════╝██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝   |_,-'_)
   ███████╗███████║█████╗  ██████╔╝██║     ██║   ██║██║     █████╔╝    /##c '\\  (
   ╚════██║██╔══██║██╔══╝  ██╔══██╗██║     ██║   ██║██║     ██╔═██╗   ' |'  -{.  )
   ███████║██║  ██║███████╗██║  ██║███████╗╚██████╔╝╚██████╗██║  ██╗    /\\__-' \\[]
   ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝    /\`-_\`\\
    Version: ${SHERLOCK_VERSION}  |  Sites: ${sitesCount}  |  Made with ${
      red(
        "<3",
      )
    } by checkerschaf.     '     \\
`),
  );
};

export const showVersionMessage = () => {
  console.log(
    green(
      `You are using version v${
        bold(
          SHERLOCK_VERSION,
        )
      }. with a total of ${bold(`${Object.keys(sites).length}`)} sites.`,
    ),
  );
};

export const showHelpMessage = () => {
  console.log(
    `Options:
-h, --help          Show help
-v, --version       Show version number and number of active sites
-a, --all           Show all results                                   [boolean]
-t, --timeout       Set timout for requests in seconds    [number] [default: 30]
-f, --format        Select output format [choices: "json", "pretty_json", "csv"]

Examples:
${yellow("sherlock JohnDoe")}        Search for JohnDoe
${yellow("sherlock -a JohnDoe")}     Search for JohnDoe and show all results`,
  );
};
