import { Component, OnInit } from '@angular/core';

// SERVICES
import { MaterialService } from '@services/material/material.service';
import { OrderService } from '@services/order/order.service';
import { PriceService } from '@services/price/price.service';
import { ProvidersService } from '@services/providers/providers.service';
import { RequestService } from '@services/request/request.service';
import { StorageService } from '@services/storage/storage.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _materialService: MaterialService,
    private _orderService: OrderService,
    private _priceService: PriceService,
    private _providerService: ProvidersService,
    private _requestService: RequestService,
    private _storageService: StorageService,
    private _userService: UserService
  ) { }

  public ngOnInit (): void {
    this._storageService.clear()

    setTimeout(() => {
      this._materialService.initializeMaterials()
      this._orderService.initializeOrders()
      this._priceService.initializePrices()
      this._providerService.initializeProviders()
      this._requestService.initializeRequests()
      this._userService.initializeUsers()
    }, 500)
  }
}
