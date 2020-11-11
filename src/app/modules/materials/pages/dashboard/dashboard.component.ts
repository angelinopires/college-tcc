import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialService } from '@services/material/material.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'description', 'unity', 'group'];

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _materialService: MaterialService) {}

  ngOnInit (): void {
    this.dataSource.data = this._materialService.getMaterials()
  }

  ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }
}
