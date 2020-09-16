export default class Timer {
  private static begin: number;

  static start(): void {
    Timer.begin = Date.now();
  }

  static end(): number {
    return Math.abs(Date.now() - Timer.begin);
  }
}
