import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

// SERVICES
import { MaterialService } from '@services/material/material.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'description', 'unity', 'group'];
  @ViewChild(MatSort) sort: MatSort;
  materialSubscription: Subscription


  constructor (private _materialService: MaterialService) {}

  public ngOnInit (): void {
    this._setMaterials()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.materialSubscription && this.materialSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  private _setMaterials (): void {
    this._materialService.fetchMaterials()

    this.materialSubscription = this._materialService.materials.subscribe(materials => {
      if (materials.length <= 0) return

      this.dataSource = new MatTableDataSource(materials)
    })
  }
}
