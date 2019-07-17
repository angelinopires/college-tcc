import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
