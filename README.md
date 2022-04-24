# Sherlock-Deno 🕵️ - search users across 350+ websites

<p align="center">
  <br>
  <img alt="Screenshot Sherlock-Deno" src="https://github.com/checkerschaf/sherlock-deno/raw/master/screenshot.png" />
  <br>
</p>

Sherlock-Deno lets you quickly scan hundreds of websites for an username. 🕵️

This is an improved remake of the original
[project-sherlock](https://github.com/sherlock-project/sherlock) by
[sdushantha](https://github.com/sdushantha).

#### 🕵️ Why Sherlock-Deno?

- Super fast
- Extremely lightweight
- Can be run without installation
- Runs everywhere (Windows, macOS, Linux as executable/Docker/CLI command)
- Runs all checks concurrently (asynchronous)
- Cleverly looks through the response to determine if a user has an account
  (status code, redirect, page content)
- Follows HTTP(S) redirections
- Only uses the deno standard modules (colors, flags)
- Secure by default (has only network permissions)

#### Status

[![Latest Release](https://img.shields.io/github/release/checkerschaf/sherlock-deno.svg?label=Latest%20Release)](https://github.com/checkerschaf/sherlock-deno/releases/latest)
[![Deno CI](https://img.shields.io/github/workflow/status/checkerschaf/sherlock-deno/Deno%20CI?label=Deno%20CI&logo=GitHub)](https://github.com/checkerschaf/sherlock-deno/actions)
[![Deno Land](https://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/sherlock)
[![Deno Version](https://img.shields.io/badge/Deno%20Version-^1.21.0-lightgrey?logo=deno)](https://deno.land)
![Code size](https://img.shields.io/github/languages/code-size/checkerschaf/sherlock-deno?label=Code%20Size)

---

## 🤔 How to use?

### 🦕 Install using Deno (recommended ✔️)

Simply install deno on your system with a single command. You can find the
offical command [here](https://deno.land/#installation).

#### With installation (recommended ✔️):

`deno install --allow-net --reload -qfn sherlock https://deno.land/x/sherlock/cli.ts`

Verify the installation by typing `sherlock`

#### Without installation:

`deno run --allow-net -q https://deno.land/x/sherlock/cli.ts`

**Done!** 🎉 You now have a running version of Sherlock-Deno.

### 📦 Executable file

Go to
[latest release](https://github.com/checkerschaf/sherlock-deno/releases/latest)
and download the executable for Windows, MacOS or Linux.

### 🐳 Docker

Run
`docker run -it denoland/deno run -q --allow-net https://deno.land/x/sherlock/cli.ts`

## 🔄 How to update the CLI?

Deno caches the dependencies locally, so you have to rerun the installation
command from
[here](https://github.com/checkerschaf/sherlock-deno-update#with-installation-recommended).

---

## ⚙️ Command Line Options

|    Argument     |                 Description                 |
| :-------------: | :-----------------------------------------: |
|  `-h, --help`   |                  Show help                  |
| `-v, --version` | Show version number and active sites count  |
|   `-a, --all`   |              Show all results               |
| `-t, --timeout` |     Set timout for requests in seconds      |
| `-f, --format`  | Select output format [json,pretty_json,csv] |

---

## ✨ How to contribute?

If you encounter any issues please create an issue
[here](https://github.com/checkerschaf/sherlock-deno/issues) but please look for
existing issues first before creating a new one 😉

Feel free to create an issue if you have an idea what could be added next.
Thanks in advance!

## 💻 How to install the source code?

1. Clone the repository.
2. Run `deno task start`

**Done!** 🎉 You now have a running version of the Sherlock-Deno CLI on your
machine.

### Development commands:

We use [Deno Task Runner](https://deno.land/manual/tools/task_runner) as our
script runner.

Run `deno task` to view all available commands.
