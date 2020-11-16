import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// MOCKS
import { Users } from '@mocks/users'

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { User } from '@projectTypes/index'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersSubject = new BehaviorSubject<User[]>([] as User[]);
  public users = this._usersSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private _storageService: StorageService) { }

  public getUsersFromStorage (): User[] {
    return JSON.parse(this._storageService.getItem('users'))
  }

  public initializeUsers (): void {
    const usersFromStorage = this.getUsersFromStorage()

    if (!usersFromStorage) {
      const usersClass = new Users()

      this._storageService.setItem('users', JSON.stringify(usersClass.getAllUsers()))
    }
  }

  public getUsers (): Request[] {
    return JSON.parse(this._storageService.getItem('users'))
  }

  public fetchUsers (): void {
    const usersFromStorage = this.getUsersFromStorage()
    this._setUsersSubject(usersFromStorage)
  }

  private _setUsersSubject (users: User[]): void {
    this._usersSubject.next(users)
  }
}
