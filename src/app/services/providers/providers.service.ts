import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { Providers } from '@mocks/providers'
import { Provider } from '@projectTypes/provider'

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  constructor(private _storageService: StorageService) { }

  public initializeProviders(): void {
    const providers = new Providers()
    this._storageService.setItem('providers', JSON.stringify(providers.getAllProviders()))
  }

  public getProviders (): Provider[] {
    return JSON.parse(this._storageService.getItem('providers'))
  }
}
