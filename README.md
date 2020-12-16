# Sherlock-Deno 🕵️ - search users across 270+ websites

<p align="center">
  <br>
  <img alt="Screenshot Sherlock-Deno" src="https://github.com/checkerschaf/sherlock-deno/raw/master/screenshot.png" />
  <br>
</p>

Sherlock-Deno is an improved remake of the original [project-sherlock](https://github.com/sherlock-project/sherlock) by [sdushantha](https://github.com/sdushantha).

#### Why use Sherlock-Deno?

- Super fast
- Extremely lightweight
- Can be run without installation
- Runs all checks concurrently (asynchronous)
- Cleverly looks through the response to determine if a user has an account (status code, redirect, page content)
- Follows HTTP(S) redirections
- Only uses the deno standard modules (colors, flags)

#### Status

[![Latest Release](https://img.shields.io/github/release/checkerschaf/sherlock-deno.svg?label=Latest%20Release)](https://github.com/checkerschaf/sherlock-deno/releases/latest)
[![Deno CI](https://img.shields.io/github/workflow/status/checkerschaf/sherlock-deno/Deno%20CI?label=Deno%20CI&logo=GitHub)](https://github.com/checkerschaf/sherlock-deno/actions)
[![Deno Land](https://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/sherlock)
[![Deno Version](https://img.shields.io/badge/Deno%20Version-^1.5.0-lightgrey?logo=deno)](https://deno.land)
![Code size](https://img.shields.io/github/languages/code-size/checkerschaf/sherlock-deno?label=Code%20Size)

## How to use the CLI (Command Line Interface)?

Simply install deno on your system with a single command. You can find the offical command [here](https://deno.land/#installation).

#### With installation (recommended):

`deno install --allow-net -f -n sherlock https://deno.land/x/sherlock/cli.ts`

Verify the installation by typing `sherlock`

#### Without installation:

`deno run --allow-net https://deno.land/x/sherlock/cli.ts`

**Done!** 🎉 You now have a running version of Sherlock-Deno.

## Command Line Options

|    Argument     |                 Description                 |
| :-------------: | :-----------------------------------------: |
|    `--help`     |                  Show help                  |
|   `--version`   | Show version number and active sites count  |
|   `-a, --all`   |              Show all results               |
| `-t, --timeout` |  Set timout for requests in seconds (WIP)   |
| `-f, --format`  | Select output format [json,pretty_json,csv] |

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

- `deno test src` - Runs all tests.
- `deno test src --coverage --unstable` - Runs all tests and creates a code coverage report.
- `deno test --allow-net all-sites` - Runs false positive & false negative tests for every site. Add `--filter=SITE` to only test a specific site.
- `deno run -A src/scripts/update-sites.ts` - Downloads all sites from project-sherlock, applies patches and saves them to sites.ts.
- `deno lint --unstable` - Runs a code linter to check the code style.

_Tip: You can find more info about the deno cli [here](https://deno.land/manual/getting_started/command_line_interface)._
