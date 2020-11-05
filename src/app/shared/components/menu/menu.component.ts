import { Component } from '@angular/core';

// TYPES
import { MenuItem } from './types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public routes: MenuItem[] = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Cotações',
      path: '/cotacoes'
    },
    {
      label: 'Fornecedores',
      path: 'fornecedores'
    },
    {
      label: 'Materiais',
      path: '/materiais'
    },
    {
      label: 'Pedidos de Compras',
      path: '/pedidos'
    },
    {
      label: 'Solicitações de Compras',
      path: '/solicitacoes'
    },
    {
      label: 'Usuários',
      path: '/usuarios'
    }
  ];
}
