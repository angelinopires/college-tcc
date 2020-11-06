import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/materiais', title: 'Materiais',  icon:'list_alt', class: '' },
  { path: '/fornecedores', title: 'Fornecedores',  icon:'local_shipping', class: '' },
  { path: '/solicitacoes', title: 'Solicitações de Compras',  icon: 'content_paste', class: '' },
  { path: '/cotacoes', title: 'Cotações',  icon:'request_quote', class: '' },
  { path: '/pedidos', title: 'Pedidos de Compras',  icon:'shopping_bag', class: '' },
  { path: '/usuarios', title: 'Usuários',  icon:'supervisor_account', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
