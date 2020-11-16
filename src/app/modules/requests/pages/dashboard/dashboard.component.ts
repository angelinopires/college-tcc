import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

// SERVICES
import { RequestService } from '@services/request/request.service';
import { Request } from '@projectTypes/index';

// TYPES
import { RequestStatus, RequestPriority } from '@enums'

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  animations: [trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*', minHeight: "*"})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])]
})

export class DashboardComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay = ['id', 'requester', 'justification', 'requestDate', 'desiredDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource();
  expandedElement: Request | null;

  requestStatusEnums = RequestStatus
  requestPriorityEnums = RequestPriority

  requestSubscription: Subscription

  constructor (private _requestService: RequestService) {}

  public ngOnInit (): void {
    this._setRequestsList()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.requestSubscription && this.requestSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  private _setRequestsList (): void {
    this._requestService.fetchRequests()

    this._requestService.requests.subscribe(requests => {
      if (requests.length <= 0) return

      this.dataSource = new MatTableDataSource(requests)
    })
  }
}
