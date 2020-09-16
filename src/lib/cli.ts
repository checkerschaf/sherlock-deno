import { c, CliArguments, yargs } from "../deps.ts";
import { OutputFormat } from "../enums.ts";
import { VERSION } from "../sherlock.ts";
import {sites} from "../sites.ts";

async function readCliArguments(args: Array<string>): Promise<CliArguments> {
  return await yargs()
    .options({
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
    .example(c.yellow("sherlock JohnDoe"), "Search for JohnDoe")
    .example(
      c.yellow("sherlock -m JohnDoe"),
      "Search for JohnDoe and only show matches",
    )
    .version(c.green(`You are using version v${c.bold(VERSION)}. with a total of ${c.bold(`${Object.keys(sites).length}`)} sites.`))
    .parse(args);
}

const ask = async (
  question = "",
  addEmptyLine = false,
  stdin = Deno.stdin,
  stdout = Deno.stdout,
): Promise<string> => {
  const buf = new Uint8Array(1024);

  // Write question to console
  await stdout.write(new TextEncoder().encode(question));

  // Read console's input into answer
  const n = <number> await stdin.read(buf);
  const answer = new TextDecoder().decode(buf.subarray(0, n));

  if (addEmptyLine) console.log();

  return answer.trim();
};

const askForUsername = (): Promise<string> => {
  return ask(c.green(c.bold(`[>] Input username: `)), true);
};

const getUsername = async (argv: CliArguments): Promise<string> => {
  if (argv._?.length) return argv._[0];
  return askForUsername();
};

export { ask, getUsername, readCliArguments };
