import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProvidersService } from '@services/providers/providers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'city', 'salesman', 'phone', 'mobile', 'actions'];

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _providerService: ProvidersService) {}

  ngOnInit (): void {
    this.dataSource.data = this._providerService.getProviders()
  }

  ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }
}
