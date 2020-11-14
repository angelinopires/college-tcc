import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { MaterialService } from '@services/material/material.service';
import { PriceService } from '@services/price/price.service';
import { ProvidersService } from '@services/providers/providers.service';
import { RequestService } from '@services/request/request.service';
import { StorageService } from '@services/storage/storage.service';
import { UserService } from '@services/user/user.service';

RequestService
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(
    private _materialService: MaterialService,
    private _priceService: PriceService,
    private _providerService: ProvidersService,
    private _requestService: RequestService,
    private _router: Router,
    private _storageService: StorageService,
    private _userService: UserService
  ) { }

  private _redirect (path: string): void {
    this._router.navigate([`${path}`])
  }

  public login (email: string, password: string): void {
    const user = {
      id: 1,
      name: "Gerente de Compras",
      email,
      active: true,
      permissionId: 1,
      departmentId: 1
    }

    this._storageService.setItem('user', JSON.stringify(user))
    this._materialService.initializeRequests()
    this._priceService.initializePrices()
    this._providerService.initializeProviders()
    this._requestService.initializeRequests()
    this._userService.initializeUsers()
    this._redirect('/solicitacoes')
  }

  public logout (): void {
    this._redirect('/')
    this._storageService.clear()
  }
}
