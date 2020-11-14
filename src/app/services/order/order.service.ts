import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { Orders } from '@mocks/orders'
import { OrdersMaterials } from '@mocks/ordersMaterials'
import { Order, OrderMaterial } from '@projectTypes/index'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private _storageService: StorageService) { }

  public initializeOrders(): void {
    const orders = new Orders()
    const ordersMaterials = new OrdersMaterials()

    this._storageService.setItem('orders', JSON.stringify(orders.getAllOrders()))
    this._storageService.setItem('ordersMaterials', JSON.stringify(ordersMaterials.getAllOrdersMaterials()))
  }

  public getOrders (): Order[] {
    return JSON.parse(this._storageService.getItem('orders'))
  }

  public getOrdersMaterials (): OrderMaterial[] {
    return JSON.parse(this._storageService.getItem('ordersMaterials'))
  }

  public getOrdersMaterialsByOrderId (orderId: number): OrderMaterial[] {
    const ordersMaterials = this.getOrdersMaterials()

    return ordersMaterials.filter(orderMaterial => orderMaterial.orderId === orderId)
  }
}
