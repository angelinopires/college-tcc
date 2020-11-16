import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { LoadingComponent } from './components/loading/loading.component';
import { MainStructureComponent } from './components/main-structure/main-structure.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// MODULES
import { MaterialUiModule } from '@material-ui/material-ui.module';

// SERVICES
import { LoginService } from '@services/login/login.service';
import { FeedbackModalComponent } from './components/feedback-modal/feedback-modal.component';

@NgModule({
  declarations: [
    LoadingComponent,
    MainStructureComponent,
    NavbarComponent,
    SidebarComponent,
    FeedbackModalComponent
  ],
  exports: [
    LoadingComponent,
    MainStructureComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule, MaterialUiModule],
  providers: [LoginService]
})
export class SharedModule {}
