import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@providers/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { ProvidersRoutingModule } from './providers-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api/api.service';
import { ProvidersService } from '@services/providers/providers.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    ProvidersRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [ApiService, ProvidersService]
})
export class ProvidersModule {}
