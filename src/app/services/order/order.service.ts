import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// MOCKS
import { Orders } from '@mocks/orders'
import { OrdersMaterials } from '@mocks/ordersMaterials'

// TYPES
import { Order, OrderMaterial } from '@projectTypes/index'

// STYLES
import { PriceService } from '@services/price/price.service';
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _ordersSubject = new BehaviorSubject<Order[]>([] as Order[]);
  public orders = this._ordersSubject.asObservable().pipe(distinctUntilChanged());

  private _ordersMaterialsSubject = new BehaviorSubject<OrderMaterial[]>([] as OrderMaterial[]);
  public ordersMaterials = this._ordersMaterialsSubject.asObservable().pipe(distinctUntilChanged());

  constructor(
    private _priceService: PriceService,
    private _storageService: StorageService) {
  }

  public getOrdersFromStorage (): Order[] {
    return JSON.parse(this._storageService.getItem('orders'))
  }

  public getOrdersMaterialsFromStorage (): OrderMaterial[] {
    return JSON.parse(this._storageService.getItem('ordersMaterials'))
  }

  public initializeOrders(): void {
    const ordersFromStorage = this.getOrdersFromStorage()
    const ordersMaterialsFromStorage = this.getOrdersMaterialsFromStorage()

    if (!ordersFromStorage) {
      const orders = new Orders()
      this._setOrdersLocalStorage(orders.getAllOrders())
    }

    if (!ordersMaterialsFromStorage) {
      const ordersMaterials = new OrdersMaterials()
      this._setOrdersMaterialsLocalStorage(ordersMaterials.getAllOrdersMaterials())
    }
  }

  public fetchOrders (): void {
    const ordersFromStorage = this.getOrdersFromStorage()
    const ordersMaterialsFromStorage = this.getOrdersMaterialsFromStorage()

    this._setOrdersSubject(ordersFromStorage)
    this._setOrdersMaterialsSubject(ordersMaterialsFromStorage)
  }

  public getLastOrderId (): number {
    const orders = this.getOrdersFromStorage()

    return orders[orders.length - 1].id
  }

  public setNewOrder (order: Order, priceId: number): void {
    if (!order) return

    const orders = this.getOrdersFromStorage()
    orders.push(order)

    this._priceService.setPriceStatus(priceId, 'DONE')

    this._setOrdersSubject(orders)
    this._setOrdersLocalStorage(orders)
  }

  public setNewOrdersMaterials (ordersMaterial: OrderMaterial[]): void {
    if (!ordersMaterial || ordersMaterial.length <= 0) return

    const ordersMaterials = this.getOrdersMaterialsFromStorage()

    ordersMaterial.map(priceMaterial => {
      ordersMaterials.push(priceMaterial)
    })

    this._setOrdersMaterialsLocalStorage(ordersMaterials)
    this._setOrdersMaterialsSubject(ordersMaterials)
  }

  private _setOrdersLocalStorage (orders: Order[]): void {
    this._storageService.setItem('orders', JSON.stringify(orders))
  }

  private _setOrdersMaterialsLocalStorage (ordersMaterials: OrderMaterial[]): void {
    this._storageService.setItem('ordersMaterials', JSON.stringify(ordersMaterials))
  }

  private _setOrdersSubject (orders: Order[]): void {
    this._ordersSubject.next(orders)
  }

  private _setOrdersMaterialsSubject (ordersMaterial: OrderMaterial[]): void {
    this._ordersMaterialsSubject.next(ordersMaterial)
  }
}
