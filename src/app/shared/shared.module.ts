import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [LoadingComponent, MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
