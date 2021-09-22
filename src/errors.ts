import { c } from "./deps.ts";

export class AppError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const printFatalError = (err: Error): void => {
  console.log(c.red(`[!] Fatal error: ${err.message || err}`));
};
