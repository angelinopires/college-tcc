import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'cotacoes',
    loadChildren: './modules/prices/prices.module#PricesModule'
  },
  {
    path: 'fornecedores',
    loadChildren: './modules/providers/providers.module#ProvidersModule'
  },
  {
    path: 'materiais',
    loadChildren: './modules/materials/materials.module#MaterialsModule'
  },
  {
    path: 'pedidos',
    loadChildren: './modules/orders/orders.module#OrdersModule'
  },
  {
    path: 'solicitacoes',
    loadChildren: './modules/requests/requests.module#RequestsModule'
  },
  {
    path: 'usuarios',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
