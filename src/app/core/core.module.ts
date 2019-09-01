import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [ApiService]
})
export class CoreModule { }
