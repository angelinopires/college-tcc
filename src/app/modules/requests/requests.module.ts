import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@requests/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { RequestsRoutingModule } from './requests-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api/api.service';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    RequestsRoutingModule,
    RouterModule,
    SharedModule,
    PipesModule
  ],
  providers: [ApiService]
})
export class RequestsModule {}
