import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// GUARDS
import { AdminGuardGuard, BasicGuardGuard, BuyerGuardGuard } from '@guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule'
  },
  {
    canActivate: [AdminGuardGuard],
    path: 'usuarios',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  {
    canActivate: [BuyerGuardGuard],
    path: 'cotacoes',
    loadChildren: './modules/prices/prices.module#PricesModule'
  },
  {
    canActivate: [BasicGuardGuard],
    path: 'fornecedores',
    loadChildren: './modules/providers/providers.module#ProvidersModule'
  },
  {
    canActivate: [BasicGuardGuard],
    path: 'materiais',
    loadChildren: './modules/materials/materials.module#MaterialsModule'
  },
  {
    canActivate: [BuyerGuardGuard],
    path: 'pedidos',
    loadChildren: './modules/orders/orders.module#OrdersModule'
  },
  {
    canActivate: [BasicGuardGuard],
    path: 'solicitacoes',
    loadChildren: './modules/requests/requests.module#RequestsModule'
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
