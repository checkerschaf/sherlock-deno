import { assertEquals, FakeTime } from "../testing-deps.ts";
import Timer from "./timer.ts";

Deno.test("timer.ts: calculate time between start and end", () => {
  const time: FakeTime = new FakeTime();

  try {
    const timer = new Timer();
    timer.start();
    time.tick(1000);
    assertEquals(timer.elapsedTime(), 1000);
    time.tick(500);
    assertEquals(timer.end(), 1500);
    assertEquals(timer.elapsedTime(), 1500);
    time.tick(500);
    assertEquals(timer.elapsedTime(), 1500);
  } finally {
    time.restore();
  }
});
