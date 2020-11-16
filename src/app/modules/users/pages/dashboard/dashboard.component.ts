import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

// SERVICES
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  usersSubscription: Subscription
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'email', 'department', 'permission', 'active', 'actions'];

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _userService: UserService) {}

  public ngOnInit (): void {
    this.setUsers()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.usersSubscription && this.usersSubscription.unsubscribe()
  }

  public setUsers (): void {
    this._userService.fetchUsers()

    this.usersSubscription = this._userService.users.subscribe(users => {
      if (users.length > 0) {
        this.dataSource.data = users
      }
    })
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }
}
