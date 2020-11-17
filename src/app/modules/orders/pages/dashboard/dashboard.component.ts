import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// SERVICES
import { OrderService } from '@services/order/order.service'

// TYPES
import { OrderMaterial } from '@projectTypes/index'
import { OrderStatus } from '@enums'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*', minHeight: "*"})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])]
})

export class DashboardComponent implements AfterViewInit, OnDestroy, OnInit {
  columnsToDisplay = ['id', 'provider', 'createdAt', 'deadline', 'status', 'actions'];
  dataSource = new MatTableDataSource();
  expandedElement: Request | null;
  orderStatusEnum = OrderStatus
  @ViewChild(MatSort) sort: MatSort;

  ordersSubscription: Subscription
  ordersMaterialSubscription: Subscription

  ordersMaterialsList: OrderMaterial[] = []

  constructor (private _orderService: OrderService) {}

  public ngOnInit (): void {
    this._setOrdersList()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.ordersSubscription && this.ordersSubscription.unsubscribe()
    this.ordersMaterialSubscription && this.ordersMaterialSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  public getTotalPrice (orderId: number): number {
    let total: number = 0
    const materialsPrices = this.getOrdersMaterialsById(orderId)

    materialsPrices.map(materialPrice => {
      total += materialPrice.material.amount * materialPrice.unityPrice
    })

    return total
  }

  public getOrdersMaterialsById (orderId: number): OrderMaterial[] {
    return this.ordersMaterialsList.filter(orderMaterial => orderMaterial.orderId === orderId)
  }

  private _setOrdersList (): void {
    this._orderService.fetchOrders()

    this.ordersSubscription = this._orderService.orders.subscribe(orders => {
      if (orders.length <= 0) return

      this.dataSource = new MatTableDataSource(orders)
    })


    this.ordersMaterialSubscription = this._orderService.ordersMaterials.subscribe(ordersMaterials => {
      if (ordersMaterials.length <= 0) return

      this.ordersMaterialsList = ordersMaterials
    })
  }
}
