import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from '@orders/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PipesModule } from '@pipes/pipes.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, CreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialUiModule,
    OrdersRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class OrdersModule {}
