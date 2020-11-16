import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// MOCKS
import { Providers } from '@mocks/providers'

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { Provider } from '@projectTypes/provider'

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private _providersSubject = new BehaviorSubject<Provider[]>([] as Provider[]);
  public providers = this._providersSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private _storageService: StorageService) { }

  public getProvidersFromStorage (): Provider[] {
    return JSON.parse(this._storageService.getItem('providers'))
  }

  public initializeProviders(): void {
    const providersFromStorage = this.getProvidersFromStorage()

    if (!providersFromStorage) {
      const providers = new Providers()
      this._setProvidersLocalStorage(providers.getAllProviders())
    }
  }

  public fetchProviders (): void {
    const providerFromStorage = this.getProvidersFromStorage()

    this._setProvidersSubject(providerFromStorage)
  }

  public getProviders (): Provider[] {
    return JSON.parse(this._storageService.getItem('providers'))
  }

  private _setProvidersLocalStorage (providers: Provider[]): void {
    this._storageService.setItem('providers', JSON.stringify(providers))
  }

  private _setProvidersSubject(providers: Provider[]): void {
    this._providersSubject.next(providers)
  }
}
