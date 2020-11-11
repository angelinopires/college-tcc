import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { providers } from '@mocks/providers'
import { Provider } from '@projectTypes/providers'

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  constructor(private _storageService: StorageService) { }

  public initializeProviders(): void {
    this._storageService.setItem('providers', JSON.stringify(providers))
  }

  public getProviders (): Provider[] {
    return JSON.parse(this._storageService.getItem('providers'))
  }
}
