import { Pipe, PipeTransform, ChangeDetectorRef, NgZone } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
  pure: false // impure pipe - so Angular re-evaluates regularly
})
export class TimeAgoPipe implements PipeTransform {
  private timer: any;
  private lastValue!: string;
  private lastTime!: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}

  transform(value: Date | string): string {
    if (!value) return '';

    const now = new Date().getTime();
    const then = new Date(value).getTime();
    const seconds = Math.round(Math.abs((now - then) / 1000));
    const newValue = this.formatTime(seconds);

    // Cache the computed value
    if (this.lastValue !== newValue) {
      this.lastValue = newValue;
      this.lastTime = then;
    }

    this.removeTimer();
    this.createTimer();

    return this.lastValue;
  }

  private formatTime(seconds: number): string {
    if (seconds < 60) return 'just now';
    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (const key in intervals) {
      const value = Math.floor(seconds / intervals[key]);
      if (value >= 1) {
        return value === 1
          ? `${value} ${key} ago`
          : `${value} ${key}s ago`;
      }
    }
    return 'just now';
  }

  private removeTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private createTimer() {
    // refresh every 60 seconds
    this.ngZone.runOutsideAngular(() => {
      this.timer = setTimeout(() => {
        this.ngZone.run(() => this.changeDetectorRef.markForCheck());
      }, 60000);
    });
  }
}
