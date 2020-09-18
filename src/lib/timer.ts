export default class Timer {
  private startTime = 0;
  private endTime = 0;

  start(): void {
    this.startTime = Date.now();
  }

  end(): number {
    this.endTime = Date.now();
    return this.getRuntime();
  }

  getRuntime() {
    if (this.endTime) return Math.abs(this.endTime - this.startTime);
    return Math.abs(Date.now() - this.startTime);
  }
}
