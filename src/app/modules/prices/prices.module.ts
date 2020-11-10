import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@prices/pages';

// MODULES
import { PricesRoutingModule } from './prices-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PricesRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class PricesModule {}
