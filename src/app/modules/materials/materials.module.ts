import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from './pages';

// MODULES
import { MaterialsRoutingModule } from './materials-routing.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialsRoutingModule, RouterModule, SharedModule],
  providers: [ApiService]
})
export class MaterialsModule {}
