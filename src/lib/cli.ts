import { c, CliArguments, yargs } from "../deps.ts";
import { OutputFormat } from "../enums.ts";

async function readCliArguments(args: Array<string>): Promise<CliArguments> {
  return await yargs()
    .options({
      name: {
        alias: ["n", "u", "username"],
        description: "Username to look for",
        demandOption: true,
        type: "string",
      },
      onlyMatching: {
        alias: "m",
        description: "Only show matching results",
        type: "boolean",
      },
      timeout: {
        alias: "t",
        description: "Set timout for requests in ms",
        type: "number",
        default: 100000,
      },
      format: {
        description: "Select output format",
        type: "string",
        alias: "f",
        choices: Object.keys(OutputFormat).map((val) =>
          val.toLocaleLowerCase()
        ),
      },
    })
    .epilogue(
      `📖 ${c.cyan("For more details please visit")} ${
        c.underline(c.blue("https://github.com/checkerschaf/sherlock-deno"))
      }`,
    )
    .example(c.yellow("sherlock -n=John"), "Search for John")
    .example(
      c.yellow("sherlock -n=John -m}"),
      "Search for John and only show matches",
    )
    .parse(args);
}

export { readCliArguments };
