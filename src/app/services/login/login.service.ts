import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService, StorageService } from '@services';

RequestService
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(
    private _requestService: RequestService,
    private _router: Router,
    private _storageService: StorageService
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
    this._requestService.initializeRequests()
    this._redirect('/solicitacoes')
  }

  public logout (): void {
    this._redirect('/')
    this._storageService.clear()
  }
}
