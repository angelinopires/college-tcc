import { Injectable } from '@angular/core';
import { Prices } from '@mocks/prices'
import { PricesMaterials } from '@mocks/pricesMaterials';
import { Price, PriceMaterial } from '@projectTypes/index'
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  constructor(private _storageService: StorageService) { }

  public initializePrices(): void {
    const prices = new Prices()
    const pricesMaterials = new PricesMaterials()

    this._storageService.setItem('prices', JSON.stringify(prices.getAllPrices()))
    this._storageService.setItem('pricesMaterials', JSON.stringify(pricesMaterials.getAllPricesMaterials()))
  }

  public getPrices (): Price[] {
    return JSON.parse(this._storageService.getItem('prices'))
  }

  public getPricesMaterials (): PriceMaterial[] {
    return JSON.parse(this._storageService.getItem('pricesMaterials'))
  }

  public getPricesMaterialsByPriceId (priceId: number): PriceMaterial[] {
    const priceMaterials = this.getPricesMaterials()

    return priceMaterials.filter(priceMaterial => priceMaterial.priceId === priceId)
  }
}
