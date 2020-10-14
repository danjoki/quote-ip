import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCalc',
})
export class DateCalcPipe implements PipeTransform {
  transform(date: any): number {
    let today: Date = new Date();
    let noTimeDate: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let dateDiff = Math.abs(date - noTimeDate);
    const daysInSecond = 60 * 60 * 24;
    let dateDiffSec = dateDiff * 0.001;
    let counter = Math.trunc(dateDiffSec / daysInSecond);
    if (counter >= 1 && date > noTimeDate) return counter;
    else return 0;
  }
}
