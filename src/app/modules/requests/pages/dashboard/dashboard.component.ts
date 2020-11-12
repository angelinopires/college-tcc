import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// SERVICES
import { RequestService } from '@services/request/request.service';
import { Request } from '@projectTypes/index';

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

export class DashboardComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'requester', 'justification', 'requestDate', 'desiredDate', 'priority', 'status', 'actions'];

  expandedElement: Request | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor (private _requestService: RequestService) {}

  ngOnInit (): void {
    this.dataSource.data = this._requestService.getRequests()
  }

  ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }
}
