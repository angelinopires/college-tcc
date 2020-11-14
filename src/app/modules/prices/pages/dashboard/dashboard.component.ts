import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// SERVICES
import { PriceService } from '@services/price/price.service'

// TYPES
import { PriceMaterial } from '@projectTypes/index'

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
  columnsToDisplay = ['id', 'description', 'requestDate', 'deadline', 'status', 'responseDate', 'suggestedDate', 'actions'];

  expandedElement: Request | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _priceService: PriceService) {}

  public ngOnInit (): void {
    this.dataSource.data = this._priceService.getPrices()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  public getMaterialsPrices (priceId: number): PriceMaterial[] {
    return this._priceService.getPricesMaterialsByPriceId(priceId)
  }

  public getTotalPrice (priceId: number): number {
    let total: number = 0
    const materialsPrices = this.getMaterialsPrices(priceId)

    materialsPrices.map(materialPrice => {
      total += materialPrice.materialAmount * materialPrice.unityPrice
    })

    return total
  }
}
