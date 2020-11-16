import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from '@prices/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { PipesModule } from '@pipes/pipes.module';
import { PricesRoutingModule } from './prices-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api/api.service';

@NgModule({
  declarations: [DashboardComponent, CreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialUiModule,
    PipesModule,
    PricesRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [ApiService]
})
export class PricesModule {}

