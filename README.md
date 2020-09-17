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
- Only 2 std dependencies (colors, flags)

#### Status
![Deno CI](https://github.com/checkerschaf/sherlock-deno/workflows/Deno%20CI/badge.svg?branch=master)
![Tested Deno Version](https://img.shields.io/badge/Tested%20Deno%20Version-1.4-brightgreen)
![Code size](https://img.shields.io/github/languages/code-size/checkerschaf/sherlock-deno?label=Code%20Size)

## How to use?
Simply install deno on your system with a single command. You can find the offical command [here](https://deno.land/#installation).

#### Without installation:
`deno run --allow-net https://deno.land/x/sherlock/main.ts`

#### With installation (WIP):
`deno install -f -n sherlock https://deno.land/x/sherlock/main.ts`

Then you only need to type `sherlock`.

**Done!** 🎉 You now have a running version of Sherlock-Deno.

## Command Options
| Argument | Description |
|:-:|:-:|
| `--help` | Show help |
| `--version` | Show version number and active sites count |
| `-a, --all` | Show all results |
| `-t, --timeout` | Set timout for requests in seconds |
| `-f, --format` | Select output format [json,pretty_json,csv] |

## How to contribute?
If you encounter any issues please create an issue [here](https://github.com/checkerschaf/sherlock-deno/issues) but please look for existing issues first before creating a new one 😉

Feel free to create an issue if you have an idea what could be added next. Thanks in advance!

## How to update?
Deno caches the dependencies locally, so you may need to clear the cache to update. To do so simply run:

`deno cache --reload https://deno.land/x/sherlock/main.ts`

Next run the installation command from above again.

## How to install the source code?
1. Clone the repository.
2. Run `deno run --allow-net main.ts`

Done! 🎉 You now have a running version of Sherlock-Deno on your local machine.

### Useful development commands:
- `deno lint --unstable` - Runs a code linter to check the code style.
- `deno test` - Runs all tests.

*Tip: You can find more info about the deno cli [here](https://deno.land/manual/getting_started/command_line_interface).*
