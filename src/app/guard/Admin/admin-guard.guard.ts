import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { User } from '@projectTypes/index'

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor (private router: Router, private _storageService: StorageService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLoggedIn: User = JSON.parse(this._storageService.getItem('userLoggedIn'))

    if (!userLoggedIn || userLoggedIn.permission.id !== 1) return this.router.parseUrl('/')

    return true;
  }

}
