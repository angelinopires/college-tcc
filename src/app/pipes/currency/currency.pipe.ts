import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currencyBrl'
})
export class CurrencyPipe implements PipeTransform {
  transform(
    value: number,
    currencyCode: string = 'BRL',
    display:
      | 'code'
      | 'symbol'
      | 'symbol-narrow'
      | string
      | boolean = 'symbol',
    digitsInfo: string = '0.2-2',
    locale: string = 'pt'): string | null {
    if (!value) {
      return '-';
    }

    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo,
    );
  }

}
