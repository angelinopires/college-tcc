import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@requests/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { RequestsRoutingModule } from './requests-routing.module';
import { SharedModule } from '@shared/shared.module';

// PIPES
import { DateFormatPipe } from '@pipes/date-format.pipe';

// SERVICES
import { ApiService } from '@services/api/api.service';


@NgModule({
  declarations: [DashboardComponent, DateFormatPipe],
  imports: [
    CommonModule,
    MaterialUiModule,
    RequestsRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [ApiService]
})
export class RequestsModule {}
