import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AnswerPricesComponent, DashboardComponent } from './pages';
import { MainStructureComponent } from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainStructureComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: ':id/responder',
        component: AnswerPricesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
