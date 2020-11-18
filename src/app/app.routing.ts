import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// GUARDS
import { AdminGuard, BasicGuard, BuyerGuard, ExternalGuard } from '@guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule'
  },
  {
    canActivate: [AdminGuard],
    path: 'usuarios',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  {
    canActivate: [BuyerGuard],
    path: 'cotacoes',
    loadChildren: './modules/prices/prices.module#PricesModule'
  },
  {
    canActivate: [BasicGuard],
    path: 'fornecedores',
    loadChildren: './modules/providers/providers.module#ProvidersModule'
  },
  {
    canActivate: [BasicGuard],
    path: 'materiais',
    loadChildren: './modules/materials/materials.module#MaterialsModule'
  },
  {
    canActivate: [BuyerGuard],
    path: 'pedidos',
    loadChildren: './modules/orders/orders.module#OrdersModule'
  },
  {
    canActivate: [BasicGuard],
    path: 'solicitacoes',
    loadChildren: './modules/requests/requests.module#RequestsModule'
  },
  {
    canActivate: [ExternalGuard],
    path: 'externo',
    loadChildren: './modules/external/external.module#ExternalModule'
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
