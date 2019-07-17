import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
     HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
