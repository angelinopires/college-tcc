import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { InternalStructureComponent } from './internal-structure/internal-structure.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ModalComponent,
    InternalStructureComponent,
    LayoutComponent,
  ],
  exports: [
    InternalStructureComponent,
    LayoutComponent,
  ]
})
export class ComponentsModule { }
