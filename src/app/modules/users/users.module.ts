import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@users/pages';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { SharedModule } from '@shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

// PROVIDERS
import { ApiService } from '@services/api/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialUiModule, RouterModule, SharedModule, UsersRoutingModule],
  providers: [ApiService]
})
export class UsersModule {}
