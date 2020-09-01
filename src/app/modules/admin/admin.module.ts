import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// COMPONENTS
import { AdminComponent } from "@admin/admin.component";
import { DashboardComponent } from "@admin/pages/dashboard/dashboard.component";

// MODULES
import { AdminRoutingModule } from "./admin-routing.module";

// PROVIDERS
import { ApiService } from "@services/api.service";

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  providers: [ApiService],
})
export class AdminModule {}
