import { assertEquals, FakeTime } from "../deps-testing.ts";
import Timer from "./timer.ts";

Deno.test("timer.ts: calculate time between start and end", () => {
  const time: FakeTime = new FakeTime();

  try {
    Timer.start();
    time.tick(1000);
    assertEquals(Timer.end(), 1000);
  } finally {
    time.restore();
  }
});
