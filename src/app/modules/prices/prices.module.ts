import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@prices/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { PipesModule } from '@pipes/pipes.module';
import { PricesRoutingModule } from './prices-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialUiModule, PipesModule, PricesRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class PricesModule {}
