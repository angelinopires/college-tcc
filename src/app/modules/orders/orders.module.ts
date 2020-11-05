import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@orders/pages';

// MODULES
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, OrdersRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class OrdersModule {}
