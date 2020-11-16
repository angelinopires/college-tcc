import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [DashboardComponent, CreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialUiModule,
    PipesModule,
    ReactiveFormsModule,
    RequestsRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [ApiService]
})
export class RequestsModule {}
