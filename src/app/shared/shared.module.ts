import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from '../modules/material-ui/material-ui.module';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainStructureComponent } from './components/main-structure/main-structure.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    MainStructureComponent,
    MenuComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    MainStructureComponent,
    MenuComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule, MaterialUiModule]
})
export class SharedModule {}
