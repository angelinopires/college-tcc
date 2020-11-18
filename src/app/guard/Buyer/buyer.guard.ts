import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { User } from '@projectTypes/index'

@Injectable({
  providedIn: 'root'
})
export class BuyerGuard implements CanActivate {

  constructor (private router: Router, private _storageService: StorageService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLoggedIn: User = JSON.parse(this._storageService.getItem('userLoggedIn'))

    if (!userLoggedIn) return this.router.parseUrl('/')

    const { id } = userLoggedIn.permission

    switch (id) {
      case 1: return true
      case 2: return true
      default: return false
    }
  }
}
