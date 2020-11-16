import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

// SERVICES
import { ProvidersService } from '@services/providers/providers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnDestroy, OnInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'city', 'salesman', 'phone', 'mobile', 'actions'];
  @ViewChild(MatSort) sort: MatSort;

  providerSubscription: Subscription

  constructor (private _providerService: ProvidersService) {}

  public ngOnInit (): void {
    this._setProviders()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.providerSubscription && this.providerSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  private _setProviders (): void {
    this._providerService.fetchProviders()

    this.providerSubscription = this._providerService.providers.subscribe(providers => {
      if (providers.length <= 0) return

      this.dataSource = new MatTableDataSource(providers)
    })
  }
}
