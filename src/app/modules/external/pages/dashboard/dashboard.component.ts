import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

// SERVICES
import { PriceService } from '@services/price/price.service'
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { PriceMaterial, User } from '@projectTypes/index'
import { PriceStatus } from '@enums'

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
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'description', 'requestDate', 'deadline', 'status', 'actions'];
  priceStatusEnum = PriceStatus
  expandedElement: Request | null;
  @ViewChild(MatSort) sort: MatSort;

  pricesSubscription: Subscription
  pricesMaterialSubscription: Subscription

  pricesMaterialsList: PriceMaterial[] = []
  userLoggedIn: User

  constructor (private _priceService: PriceService, private _storageSerivce: StorageService) {}

  public ngOnInit (): void {
    const user = JSON.parse(this._storageSerivce.getItem('userLoggedIn'))
    this.userLoggedIn = user

    this._setPricesList()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.pricesSubscription && this.pricesSubscription.unsubscribe()
    this.pricesMaterialSubscription && this.pricesMaterialSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  public getMaterialsPrices (priceId: number): PriceMaterial[] {
    return this.pricesMaterialsList.filter(priceMaterial => priceMaterial.priceId === priceId)
  }

  private _setPricesList (): void {
    this._priceService.fetchPrices()

    this.pricesSubscription = this._priceService.prices.subscribe(prices => {
      if (prices.length <= 0) return

      const filteredPrices = prices.filter(price => price.status === 'WAITING')
      this.dataSource = new MatTableDataSource(filteredPrices)
    })


    this.pricesMaterialSubscription = this._priceService.pricesMaterials.subscribe(pricesMaterials => {
      if (pricesMaterials.length <= 0) return

      const filteredPricesMaterialsList = pricesMaterials.filter(priceMaterial => priceMaterial.provider.id === this.userLoggedIn.department.id)
      this.pricesMaterialsList = filteredPricesMaterialsList
    })
  }
}
