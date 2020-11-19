import { Component, OnInit } from '@angular/core';

// SERVICES
import { LoginService } from '@services/login/login.service';
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { User } from '@projectTypes/index';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  routes: RouteInfo[] = []
  menuItems: any[];

  constructor(
    private _loginService: LoginService,
    private _storageService: StorageService
  ) { }

  public ngOnInit(): void {
    this._getRoutesByPermission()
    this.menuItems = this.routes.filter(menuItem => menuItem);
  }

  public isMobileMenu(): boolean {
    return $(window).width() <= 992
  }

  public logout (): void {
    this._loginService.logout()
  }

  private _getRoutesByPermission (): void {
    const userLoggedIn: User = JSON.parse(this._storageService.getItem('userLoggedIn'))

    switch (userLoggedIn.permission.id) {
      case 1: {
        this.routes.push(
          { path: '/materiais', title: 'Materiais',  icon:'list_alt', class: '' },
          { path: '/fornecedores', title: 'Fornecedores',  icon:'local_shipping', class: '' },
          { path: '/solicitacoes', title: 'Solicitações de Compras',  icon: 'content_paste', class: '' },
          { path: '/cotacoes', title: 'Cotações',  icon:'request_quote', class: '' },
          { path: '/pedidos', title: 'Pedidos de Compras',  icon:'shopping_bag', class: '' },
          { path: '/usuarios', title: 'Usuários',  icon:'supervisor_account', class: '' }
        )
        break
      }
      case 2: {
        this.routes.push(
          { path: '/materiais', title: 'Materiais',  icon:'list_alt', class: '' },
          { path: '/fornecedores', title: 'Fornecedores',  icon:'local_shipping', class: '' },
          { path: '/solicitacoes', title: 'Solicitações de Compras',  icon: 'content_paste', class: '' },
          { path: '/cotacoes', title: 'Cotações',  icon:'request_quote', class: '' },
          { path: '/pedidos', title: 'Pedidos de Compras',  icon:'shopping_bag', class: '' }
        )
        break
      }
      case 3: {
        this.routes.push(
          { path: '/materiais', title: 'Materiais',  icon:'list_alt', class: '' },
          { path: '/fornecedores', title: 'Fornecedores',  icon:'local_shipping', class: '' },
          { path: '/solicitacoes', title: 'Solicitações de Compras',  icon: 'content_paste', class: '' }
        )
        break
      }
      default: {
        this.routes.push(
          { path: '/externo', title: 'Área do fornecedor',  icon:'home_work', class: '' }
        )
        break
      }
    }
  }
}
