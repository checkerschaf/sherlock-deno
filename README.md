# Sherlock-Deno 🕵️ - search users across 295+ websites
<p align="center">
  <br>
  <img alt="Screenshot" src="https://github.com/checkerschaf/sherlock-deno/raw/master/screenshot.png" />
  <br>
</p>

Sherlock-Deno is a remake of the original [sherlock](https://github.com/sdushantha/sherlock) by [sdushantha](https://github.com/sdushantha).

Why use Sherlock-Deno?
- Super lightweight
- Runs all checks concurrently in multiple threads
- Cleverly looks through the response to determine if a user has an account
- Follows HTTP(S) redirections

#### Master-Branch Status
![Deno CI](https://github.com/checkerschaf/sherlock-deno/workflows/Deno%20CI/badge.svg?branch=master)

## How to use?
Simply install deno on your system with one command. You can find the offical command [here](https://deno.land/#installation).

#### Without installation:
`deno run --allow-read --allow-net https://deno.land/x/sherlock/main.ts`

#### With installation (WIP):
`deno install -n sherlock https://deno.land/x/sherlock/main.ts`

Done! 🎉 You now have a running version of Sherlock-Deno.

## Command Options
| Argument | Description |
|:-:|:-:|
| `--help` | Show help |
| `--version` | Show version number |
| `-m, --onlyMatching` | Only show matching results |
| `-t, --timeout` | Set timout for requests in seconds |
| `-f, --format` | Select output format [json,pretty_json,csv] |

## How to contribute?
If you encounter any issues please create an issue [here](https://github.com/checkerschaf/sherlock-deno/issues) but please look for existing issues first before creating a new one 😉

Feel free to create an issue if you have an idea what could be added next. Thanks in advance!

## How to install the source code?
1. Clone the repository.
2. Run `deno run --allow-read --allow-net main.ts`

Done! 🎉 You now have a running version of Sherlock-Deno on your local machine.

### Useful development commands:
- `deno lint --unstable` - Runs a code linter to look for check the code style.
- `deno test` - Runs all tests.

*Tip: You can find more info about the deno cli [here](https://deno.land/manual/getting_started/command_line_interface).*
