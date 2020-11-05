import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from './pages';

// MODULES
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

// PROVIDERS
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class HomeModule {}
