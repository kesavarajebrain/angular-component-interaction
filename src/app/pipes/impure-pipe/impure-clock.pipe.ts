import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clock',
  pure: false,
  standalone : true

})
export class ClockPipe implements PipeTransform {
  transform(value: any): string {
    return new Date().toLocaleTimeString();
  }
}
