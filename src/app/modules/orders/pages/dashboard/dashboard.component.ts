import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// SERVICES
import { OrderService } from '@services/order/order.service'

// TYPES
import { OrderMaterial } from '@projectTypes/index'
import { OrderStatus } from '@enums'

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

export class DashboardComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'provider', 'createdAt', 'deadline', 'status', 'actions'];
  orderStatusEnum = OrderStatus
  expandedElement: Request | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _orderService: OrderService) {}

  public ngOnInit (): void {
    this.dataSource.data = this._orderService.getOrders()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  public getOrdersMaterials (orderId: number): OrderMaterial[] {
    return this._orderService.getOrdersMaterialsByOrderId(orderId)
  }

  public getTotalPrice (orderId: number): number {
    let total: number = 0
    const materialsPrices = this.getOrdersMaterials(orderId)

    materialsPrices.map(materialPrice => {
      total += materialPrice.materialAmount * materialPrice.unityPrice
    })

    return total
  }
}
