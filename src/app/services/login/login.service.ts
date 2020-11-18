import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// SERVICES
import { RequestService } from '@services/request/request.service';
import { StorageService } from '@services/storage/storage.service';
import { UserService } from '@services/user/user.service';

// TYPES
import { User } from '@projectTypes/index'

RequestService
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private _userLoggedInSubject = new BehaviorSubject<User>({} as User);
  public userLoggedIn = this._userLoggedInSubject.asObservable().pipe(distinctUntilChanged());

  userList: User[] = []

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _storageService: StorageService,
  ) {}

  public login (email: string, password: string): string {
    this.userList = this._userService.getUsersFromStorage()

    const userFounded = this.userList.find(user => user.email === email && user.password === password)

    if (!userFounded) {
      return 'E-mail ou ou senha estão incorretos.'
    }

    this._setUserLoggedIn(userFounded)

    switch (userFounded.permission.id) {
      case 1: {
        this._redirect('/pedidos')
        break
      }
      case 3: {
        this._redirect('/solicitacoes')
        break
      }
      default: {
        this._redirect('/cotacoes')
        break
      }
    }
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
