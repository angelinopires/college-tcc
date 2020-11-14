import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES
import { CurrencyPipe } from './currency/currency.pipe';
import { DateFormatPipe } from './date-format/date-format.pipe';

@NgModule({
  declarations: [CurrencyPipe, DateFormatPipe],
  exports: [CurrencyPipe, DateFormatPipe],
  imports: [
    CommonModule
  ],
})
export class PipesModule { }
