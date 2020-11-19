import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

// COMPONENTS
import { DoubleConfirmModalComponent, FeedbackModalComponent } from '@shared/components';

// SERVICES
import { RequestService } from '@services/request/request.service';
import { Request, User } from '@projectTypes/index';

// TYPES
import { RequestStatus, RequestPriority } from '@enums'
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '@services/loading/loading.service';
import { StorageService } from '@services/storage/storage.service';

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

  userLoggedIn: User
  requestSubscription: Subscription

  constructor (
    private _dialog: MatDialog,
    private _loadingService: LoadingService,
    private _requestService: RequestService,
    private _storageSerivce: StorageService
  ) {}

  public ngOnInit (): void {
    const user = JSON.parse(this._storageSerivce.getItem('userLoggedIn'))
    this.userLoggedIn = user

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

  public isAbleToManageRequest (status: string): boolean {
    return status === 'VALIDATION' && (this.userLoggedIn.permission.id === 1 || this.userLoggedIn.permission.id === 2)
  }

  public openDoubleCheck(id: number, isApproving: boolean): void {
    if (isApproving) {
      this._dialog.open(DoubleConfirmModalComponent, {
        data: {
          title: 'Aprovar solicitação',
          description: 'Tem certeza que deseja aprovar esta solicitação de compras?',
          onConfirm: (): void => this.approveRequest(id)
        }
      })
      return
    }

    this._dialog.open(DoubleConfirmModalComponent, {
      data: {
        title: 'Recusar solicitação',
        description: 'Tem certeza que deseja recusar esta solicitação de compras?',
        onConfirm: (): void => this.denyRequest(id)
      }
    })
  }

  public approveRequest (id: number): void {
    this._loadingService.show()
    this._requestService.setRequestStatus(id, 'APPROVED')

    setTimeout(() => {
      this._loadingService.hide()
      this._giveFeedback('Solicitação aprovada com sucesso!', 'Clique em OK para prosseguir.')
    }, 1000)
  }

  public denyRequest (id: number): void {
    this._loadingService.show()
    this._requestService.setRequestStatus(id, 'DECLINED')

    setTimeout(() => {
      this._loadingService.hide()
      this._giveFeedback('Solicitação recusada.', 'Clique em OK para prosseguir.')
    }, 1000)
  }

  private _setRequestsList (): void {
    this._requestService.fetchRequests()

    this._requestService.requests.subscribe(requests => {
      if (requests.length <= 0) return

      this.dataSource = new MatTableDataSource(requests)
    })
  }

  private _giveFeedback(title: string, description: string): void {
    this._dialog.open(FeedbackModalComponent, {
      data: {
        title,
        description,
        routeToRedirect: '/solicitacoes'
      }
    })
  }
}
