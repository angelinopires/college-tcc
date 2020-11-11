import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from './pages';

// MODULES
import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { SharedModule } from '@shared/shared.module';

// SERVICES
import { ApiService } from '@services/api/api.service';
import { MaterialService } from '@services/material/material.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialsRoutingModule, RouterModule, SharedModule, MaterialUiModule],
  providers: [ApiService, MaterialService]
})
export class MaterialsModule {}
