import { red } from "std/fmt/colors.ts";

export class AppError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const printFatalError = (err: Error): void => {
  console.log(red(`[!] Fatal error: ${err.message || err}`));
};
