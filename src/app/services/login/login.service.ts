import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { RequestService } from '@services/request/request.service';
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { User } from '@projectTypes/index'

RequestService
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private _userLoggedInSubject = new BehaviorSubject<User>({} as User);
  public userLoggedIn = this._userLoggedInSubject.asObservable().pipe(distinctUntilChanged());

  constructor(
    private _router: Router,
    private _storageService: StorageService,
  ) { }

  public login (email: string, password: string): void {
    const user: User = {
      id: 1,
      name: "Gerente de Compras",
      email,
      active: true,
      permission: {
        id: 1,
        description: "Administrador"
      },
      department: {
        id: 1,
        manager: {
          id: 1,
          name: "Henrique Pinheiro",
          email: "henrique@email.com.br",
          active: true,
          permission: {
            id: 1,
            description: "Administrador"
          },
        },
        description: "Departamento de Compras",
        active: true
      }
    }

    this._setUserLoggedIn(user)
    this._redirect('/solicitacoes')
  }

  public logout (): void {
    this._storageService.removeItem('userLoggedIn')
    this._redirect('/')
  }

  public fetchUser (): void {
    const userFromStorage = this._getUserFromStorage()
    this._setUserSubject(userFromStorage)
  }

  private _redirect (path: string): void {
    this._router.navigate([`${path}`])
  }

  private _getUserFromStorage (): User {
    return JSON.parse(this._storageService.getItem('userLoggedIn'))
  }

  private _setUserLoggedIn (user: User): void {
    this._storageService.setItem('userLoggedIn', JSON.stringify(user))
    this._setUserSubject(user)
  }

  private _setUserSubject (user: User): void {
    this._userLoggedInSubject.next(user)
  }
}
