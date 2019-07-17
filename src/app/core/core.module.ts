import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingComponent } from './components/loading/loading.component';
import { ApiService } from './services/api.service';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    PagesModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  providers: [ApiService]
})
export class CoreModule { }
