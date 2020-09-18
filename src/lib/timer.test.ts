import { assertEquals, FakeTime } from "../deps-testing.ts";
import Timer from "./timer.ts";

Deno.test("timer.ts: calculate time between start and end", () => {
  const time: FakeTime = new FakeTime();

  try {
    const timer = new Timer();
    timer.start();
    time.tick(1000);
    assertEquals(timer.getRuntime(), 1000);
    time.tick(500);
    assertEquals(timer.end(), 1500);
    assertEquals(timer.getRuntime(), 1500);
    time.tick(500);
    assertEquals(timer.getRuntime(), 1500);
  } finally {
    time.restore();
  }
});
