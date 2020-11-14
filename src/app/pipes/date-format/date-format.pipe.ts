import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})

export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (!value) return '-'

    return super.transform(value, 'dd/MM/yyyy');
  }
}
