import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from '@providers/pages';

// MODULES
import { ProvidersRoutingModule } from './providers-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ProvidersRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class ProvidersModule {}
