import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { Users } from '@mocks/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _storageService: StorageService) { }

  public initializeUsers (): void {
    const users = new Users()
    this._storageService.setItem('users', JSON.stringify(users.getAllUsers()))
  }

  public getUsers (): Request[] {
    return JSON.parse(this._storageService.getItem('users'))
  }
}
