import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// COMPONENTS
import { DashboardComponent } from "@user/pages";
import { UserComponent } from "@user/user.component";

// MODULES
import { UserRoutingModule } from "@user/user-routing.module";

// PROVIDERS
import { ApiService } from "@services/api.service";

@NgModule({
  declarations: [DashboardComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [ApiService],
})
export class UserModule {}
