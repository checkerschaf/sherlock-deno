import { Args, c, parse } from "../deps.ts";
import { sites } from "../../sites.ts";
import type { ScannerOptions } from "../types.ts";
import { SHERLOCK_VERSION } from "../../mod.ts";

const readCliArguments = async (): Promise<ScannerOptions> => {
  const args = parse(Deno.args);

  // Show help
  if (args.help) {
    showHelp();
    Deno.exit();
  }

  // Show version
  if (args.version) {
    showVersion();
    Deno.exit();
  }

  return {
    username: await getUsername(args),
    showAll: args.all || args.a || false,
    realtimeOutput: !(args.format || args.f),
    timeout: args.timeout || args.t || 30,
    format: args.format || args.f || "",
  };
};

const showHelp = () => {
  console.log(`Options:
      --help          Show help
      --version       Show version number and number of active sites
      -a, --all       Show all results                                   [boolean]
  -t, --timeout       Set timout for requests in seconds    [number] [default: 30]
  -f, --format        Select output format [choices: "json", "pretty_json", "csv"]`);
  console.log("\n\nExamples:");
  console.log(`${c.yellow("sherlock JohnDoe")}     Search for JohnDoe`);
  console.log(
    `${
      c.yellow("sherlock -a JohnDoe")
    }     Search for JohnDoe and show all results`,
  );
};

const showVersion = () => {
  console.log(c.green(
    `You are using version v${c.bold(SHERLOCK_VERSION)}. with a total of ${
      c.bold(`${Object.keys(sites).length}`)
    } sites.`,
  ));
};

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

const getUsername = async (args: Args): Promise<string> => {
  if (args._?.length) return String(args._[0]);
  return askForUsername();
};

export { ask, getUsername, readCliArguments };
