import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AnswerPricesComponent, DashboardComponent } from './pages';

// MODULES
import { ExternalRoutingModule } from './external-routing.module';
import { MaterialUiModule } from '@material-ui/material-ui.module';
import { PipesModule } from '@pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

// GUARDS
import { ExternalGuard } from '@guard';

@NgModule({
  declarations: [AnswerPricesComponent, DashboardComponent],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    FormsModule,
    MaterialUiModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [ExternalGuard]
})
export class ExternalModule { }
