import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'email', 'department', 'permission', 'active', 'actions'];

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _userService: UserService) {}

  ngOnInit (): void {
    this.dataSource.data = this._userService.getUsers()
  }

  ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }
}
