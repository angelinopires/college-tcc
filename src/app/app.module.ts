import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

// COMPONENTS
import { AppComponent } from './app.component';

// GUARDS
import { AdminGuardGuard, BasicGuardGuard, BuyerGuardGuard } from '@guard';

// MODULES
import { AppRoutingModule } from './app.routing';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  providers: [AdminGuardGuard, BasicGuardGuard, BuyerGuardGuard]
})
export class AppModule { }
