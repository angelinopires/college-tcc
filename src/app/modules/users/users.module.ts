import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@users/pages';

// MODULES
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@shared/shared.module';

// PROVIDERS
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, UsersRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class UsersModule {}
