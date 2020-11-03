import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { HomeComponent } from '@home/home.component';

// MODULES
import { HomeRoutingModule } from '@home/home-routing.module';

// PROVIDERS
import { ApiService } from '@services/api.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [ApiService]
})
export class HomeModule {}
