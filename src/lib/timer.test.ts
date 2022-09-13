import { afterEach, beforeEach, describe, it } from "std/testing/bdd.ts";
import { assertEquals } from "std/testing/asserts.ts";
import { FakeTime } from "std/testing/time.ts";
import Timer from "./timer.ts";

describe("Timer", () => {
  let time: FakeTime;

  beforeEach(() => {
    time = new FakeTime();
  });

  afterEach(() => {
    time.restore();
  });

  it("calculate time between start and end", () => {
    const timer = new Timer();
    timer.start();
    time.tick(1000);
    assertEquals(timer.elapsedTime(), 1000);
    time.tick(500);
    assertEquals(timer.end(), 1500);
    assertEquals(timer.elapsedTime(), 1500);
    time.tick(500);
    assertEquals(timer.elapsedTime(), 1500);
  });
});
