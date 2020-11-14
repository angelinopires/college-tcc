import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@orders/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PipesModule } from '@pipes/pipes.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialUiModule, OrdersRoutingModule, PipesModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class OrdersModule {}
