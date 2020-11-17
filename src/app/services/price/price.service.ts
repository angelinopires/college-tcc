import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// MOCKS
import { Prices } from '@mocks/prices'
import { PricesMaterials } from '@mocks/pricesMaterials';

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { Price, PriceMaterial } from '@projectTypes/index'

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private _pricesSubject = new BehaviorSubject<Price[]>([] as Price[]);
  public prices = this._pricesSubject.asObservable().pipe(distinctUntilChanged());

  private _pricesMaterialsSubject = new BehaviorSubject<PriceMaterial[]>([] as PriceMaterial[]);
  public pricesMaterials = this._pricesMaterialsSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private _storageService: StorageService) { }

  public getPricesFromStorage (): Price[] {
    return JSON.parse(this._storageService.getItem('prices'))
  }

  public getPricesMaterialsFromStorage (): PriceMaterial[] {
    return JSON.parse(this._storageService.getItem('pricesMaterials'))
  }

  public initializePrices(): void {
    const pricesFromStorage = this.getPricesFromStorage()
    const pricesMaterialsFromStorage = this.getPricesMaterialsFromStorage()

    if (!pricesFromStorage) {
      const prices = new Prices()
      this._setPricesLocalStorage(prices.getAllPrices())
    }

    if (!pricesMaterialsFromStorage) {
      const pricesMaterials = new PricesMaterials()
      this._setPricesMaterialsLocalStorage(pricesMaterials.getAllPricesMaterials())
    }
  }

  public fetchPrices (): void {
    const pricesFromStorage = this.getPricesFromStorage()
    const pricesMaterialsFromStorage = this.getPricesMaterialsFromStorage()

    this._setPricesSubject(pricesFromStorage)
    this._setPricesMaterialsSubject(pricesMaterialsFromStorage)
  }

  public getLastPriceId (): number {
    const prices = this.getPricesFromStorage()

    return prices[prices.length - 1].id
  }

  public setNewPrices (price: Price): void {
    if (!price) return

    const prices = this.getPricesFromStorage()
    prices.push(price)

    this._setPricesSubject(prices)
    this._setPricesLocalStorage(prices)
  }

  public setNewPricesMaterials (pricesMaterial: PriceMaterial[]): void {
    if (!pricesMaterial || pricesMaterial.length <= 0) return

    const pricesMaterials = this.getPricesMaterialsFromStorage()

    pricesMaterial.map(priceMaterial => {
      pricesMaterials.push(priceMaterial)
    })

    this._setPricesMaterialsLocalStorage(pricesMaterials)
    this._setPricesMaterialsSubject(pricesMaterials)
  }

  public setPriceStatus(id: number, status: string): void {
    const pricesFromStorage = this.getPricesFromStorage()
    const price = pricesFromStorage.find(price => price.id === id)
    const priceIndex = pricesFromStorage.findIndex(price => price.id === id)

    if (!price) return

    price.status = status
    pricesFromStorage[priceIndex] = price

    this._setPricesSubject(pricesFromStorage)
    this._setPricesLocalStorage(pricesFromStorage)
  }

  private _setPricesLocalStorage (prices: Price[]): void {
    this._storageService.setItem('prices', JSON.stringify(prices))
  }

  private _setPricesMaterialsLocalStorage (pricesMaterials: PriceMaterial[]): void {
    this._storageService.setItem('pricesMaterials', JSON.stringify(pricesMaterials))
  }

  private _setPricesSubject (prices: Price[]): void {
    this._pricesSubject.next(prices)
  }

  private _setPricesMaterialsSubject (pricesMaterial: PriceMaterial[]): void {
    this._pricesMaterialsSubject.next(pricesMaterial)
  }
}
