import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@prices/pages';

// MODULES
import { PricesRoutingModule } from './prices-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [DashboardComponent],
  exports: [RouterModule],
  imports: [CommonModule, PricesRoutingModule, SharedModule],
  providers: [ApiService]
})
export class PricesModule {}
