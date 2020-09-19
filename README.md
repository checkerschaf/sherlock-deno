# Sherlock-Deno 🕵️ - search users across 275+ websites
<p align="center">
  <br>
  <img alt="Screenshot" src="https://github.com/checkerschaf/sherlock-deno/raw/master/screenshot.png" />
  <br>
</p>

Sherlock-Deno is an improved remake of the original [sherlock](https://github.com/sdushantha/sherlock) by [sdushantha](https://github.com/sdushantha).

#### Why use Sherlock-Deno?
- Super lightweight
- Can be run without installation
- Runs all checks concurrently (asynchronous)
- Cleverly looks through the response to determine if a user has an account (status code, redirect, page content)
- Follows HTTP(S) redirections
- Only uses the deno standard modules (colors, flags)

#### Status
![Latest Release](https://img.shields.io/github/release/checkerschaf/sherlock-deno.svg?label=Latest%20Release)
![Deno CI](https://img.shields.io/github/workflow/status/checkerschaf/sherlock-deno/Deno%20CI?label=Deno%20CI&logo=GitHub)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/sherlock)
![Deno Version](https://img.shields.io/badge/Deno%20Version-1.4.1-lightgrey?logo=deno)
![Code size](https://img.shields.io/github/languages/code-size/checkerschaf/sherlock-deno?label=Code%20Size)

## How to use the CLI (Command Line Interface)?
Simply install deno on your system with a single command. You can find the offical command [here](https://deno.land/#installation).

#### Without installation:
`deno run --allow-net https://deno.land/x/sherlock/cli.ts`

#### With installation:
`deno install --allow-net -f -n sherlock https://deno.land/x/sherlock/cli.ts`

Verify the installation by typing `sherlock`

**Done!** 🎉 You now have a running version of Sherlock-Deno.

## Command Line Options
| Argument | Description |
|:-:|:-:|
| `--help` | Show help |
| `--version` | Show version number and active sites count |
| `-a, --all` | Show all results |
| `-t, --timeout` | Set timout for requests in seconds (WIP) |
| `-f, --format` | Select output format [json,pretty_json,csv] |

## How to update the CLI?
Deno caches the dependencies locally, so you may need to clear the cache to update. To do so simply run:

`deno cache --reload https://deno.land/x/sherlock/cli.ts`

Next run the installation command from above again.

## How to contribute?
If you encounter any issues please create an issue [here](https://github.com/checkerschaf/sherlock-deno/issues) but please look for existing issues first before creating a new one 😉

Feel free to create an issue if you have an idea what could be added next. Thanks in advance!

## How to install the source code?
1. Clone the repository.
2. Run `deno run --allow-net cli.ts`

**Done!** 🎉 You now have a running version of the Sherlock-Deno CLI on your machine.

### Useful development commands:
- `deno lint --unstable` - Runs a code linter to check the code style.
- `deno test src` - Runs all tests.
- `deno test src --coverage --unstable` - Runs all tests and creates a code coverage report.

*Tip: You can find more info about the deno cli [here](https://deno.land/manual/getting_started/command_line_interface).*
