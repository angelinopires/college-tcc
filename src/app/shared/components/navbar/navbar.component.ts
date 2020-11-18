import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { User } from '@projectTypes/index';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    private toggleButton: any;
    private sidebarVisible: boolean;
    location: Location;
    mobile_menu_visible: any = 0;
    routes: RouteInfo[] = [
      { path: '/cotacoes', title: 'Cotações',  icon:'request_quote', class: '' }
    ]

    constructor(
      location: Location,
      private _storageService: StorageService,
      private element: ElementRef,
      private router: Router
    ) {
      this.location = location;
      this.sidebarVisible = false;
    }

    ngOnInit(){
      this._getRoutesByPermission()
      const navbar: HTMLElement = this.element.nativeElement;

      this.listTitles = this.routes.filter(listTitle => listTitle);
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

      this.router.events.subscribe((event) => {
        this.sidebarClose();

         var $layer: any = document.getElementsByClassName('close-layer')[0];

         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     })
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton
        const body = document.getElementsByTagName('body')[0]
        setTimeout(function(){
            toggleButton.classList.add('toggled')
        }, 500)

        body.classList.add('nav-open')

        this.sidebarVisible = true
    }

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0]
        this.toggleButton.classList.remove('toggled')
        this.sidebarVisible = false
        body.classList.remove('nav-open')
    }

    sidebarToggle() {
        // const toggleButton = this.toggleButton
        // const body = document.getElementsByTagName('body')[0]
        var $toggle = document.getElementsByClassName('navbar-toggler')[0]

        if (this.sidebarVisible === false) {
            this.sidebarOpen()
        } else {
            this.sidebarClose()
        }
        const body = document.getElementsByTagName('body')[0]

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open')
            body.classList.remove('nav-open')
            if ($layer) {
                $layer.remove()
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled')
            }, 400)

            this.mobile_menu_visible = 0
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled')
            }, 430)

            var $layer = document.createElement('div')
            $layer.setAttribute('class', 'close-layer')


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer)
            }else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer)
            }

            setTimeout(function() {
                $layer.classList.add('visible')
            }, 100)

            $layer.onclick = function() { //asign a function
              body.classList.remove('nav-open')
              this.mobile_menu_visible = 0
              $layer.classList.remove('visible')
              setTimeout(function() {
                  $layer.remove()
                  $toggle.classList.remove('toggled')
              }, 400)
            }.bind(this)

            body.classList.add('nav-open')
            this.mobile_menu_visible = 1;

        }
    };

    getTitle(){
      let title = this.location.prepareExternalUrl(this.location.path());

      if(title.charAt(0) === '#'){
        title = title.slice(1);
      }

      for (let item = 0; item < this.listTitles.length; item++) {
        if (title.includes(this.listTitles[item].path)) {
          return this.listTitles[item].title;
        }
      }
    }

    private _getRoutesByPermission (): void {
      const userLoggedIn: User = JSON.parse(this._storageService.getItem('userLoggedIn'))

      switch (userLoggedIn.permission.id) {
        case 1: {
          this.routes.push(
            { path: '/materiais', title: 'Materiais',  icon:'list_alt', class: '' },
            { path: '/fornecedores', title: 'Fornecedores',  icon:'local_shipping', class: '' },
            { path: '/solicitacoes', title: 'Solicitações de Compras',  icon: 'content_paste', class: '' },
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
        }
        case 3: {
          this.routes.push(
            { path: '/materiais', title: 'Materiais',  icon:'list_alt', class: '' },
            { path: '/fornecedores', title: 'Fornecedores',  icon:'local_shipping', class: '' },
            { path: '/solicitacoes', title: 'Solicitações de Compras',  icon: 'content_paste', class: '' }
          )
        }
        default: {
          break
        }
      }
    }
}
