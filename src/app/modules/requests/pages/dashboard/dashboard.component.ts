import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// SERVICES
import { RequestService } from '@services/request/request.service';

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

export class DashboardComponent implements OnInit {
  requestsList = new MatTableDataSource();
  columnsToDisplay = ['id', 'requesterName', 'justification', 'requestDate', 'desiredDate', 'priority', 'status', 'actions'];

  constructor (private _requestService: RequestService) {}

  ngOnInit (): void {
    this.requestsList.data = this._requestService.getRequests()
  }
}
