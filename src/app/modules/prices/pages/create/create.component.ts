import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

// COMPONENTS
import { FeedbackModalComponent } from '@shared/components';

// SERVICES
import { ProvidersService } from '@services/providers/providers.service';
import { RequestService } from '@services/request/request.service';
import { Price, PriceMaterial, Provider, Request, RequestMaterial, RequestWOMaterial } from '@projectTypes/index';

// TYPES
import { RequestStatus, RequestPriority } from '@enums'
import { PriceService } from '@services/price/price.service';
import { LoadingService } from '@services/loading/loading.service';

interface MaterialRequest {
  material: RequestMaterial;
  request: RequestWOMaterial
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*', minHeight: "*"})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])]
})
export class CreateComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay = ['id', 'requester', 'justification', 'requestDate', 'desiredDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource();
  expandedElement: Request | null;
  requestPriorityEnums = RequestPriority
  requestStatusEnums = RequestStatus

  minDate = new Date()
  priceForm: FormGroup
  providersList: Provider[] = []
  selectedMaterials: MaterialRequest[] = []

  providerSubscription: Subscription
  requestSubscription: Subscription

  constructor (
    private _dialog: MatDialog,
    private _loadingService: LoadingService,
    private fb: FormBuilder,
    private _requestService: RequestService,
    private _priceService: PriceService,
    private _providerService: ProvidersService
  ) {
    this.priceForm = this.fb.group({
      deadlineDate: ['', Validators.required],
      description: [''],
      providers: ['', Validators.required]
    })
  }

  public ngOnInit (): void {
    this._setRequestsList()
    this._setProvidersList()
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

  public handleMaterialCheck(checked: boolean, request: Request, material: RequestMaterial): void {
    if (!checked) {

      const indexToRemove = this.selectedMaterials.findIndex(selectedMaterial => {
        return selectedMaterial.material.id === material.id && selectedMaterial.request.id === request.id
      })

      this.selectedMaterials.splice(indexToRemove, 1)
      return
    }

    const { materials, ...rest } = request
    const selectedMaterial: MaterialRequest = {
      material,
      request: { ...rest }
    }

    this.selectedMaterials.push(selectedMaterial)
  }

  public createPriceMaterial (): void {
    this._loadingService.show()

    const newPricesMaterials: PriceMaterial[] = []
    const { deadlineDate, description, providers } = this.priceForm.value

    const newPrice: Price = {
      deadlineDate: moment(deadlineDate).format(),
      description,
      id: this._priceService.getLastPriceId() + 1,
      requestDate: moment().format(),
      status: 'WAITING'
    }

    this.selectedMaterials.map(selectedMaterial => {
      providers.map(provider => {
        newPricesMaterials.push({
          material: selectedMaterial.material,
          priceId: newPrice.id,
          provider,
          request: selectedMaterial.request
        })
      })
    })

    setTimeout(() => {
      this.selectedMaterials = []
      this._clearForm()
      this._giveFeedback()
      this._priceService.setNewPrices(newPrice)
      this._priceService.setNewPricesMaterials(newPricesMaterials)
      this._loadingService.hide()
    }, 2000)
  }

  private _setRequestsList (): void {
    this._requestService.fetchRequests()

    this.requestSubscription = this._requestService.requests.subscribe(requests => {
      if (requests.length <= 0) return

      const filteredRequests = requests.filter(request => request.status === 'APPROVED')
      this.dataSource = new MatTableDataSource(filteredRequests)
    })
  }

  private _setProvidersList (): void {
    this._providerService.fetchProviders()

    this.providerSubscription = this._providerService.providers.subscribe(providers => {
      if (providers.length <= 0) return

      this.providersList = providers
    })
  }

  private _giveFeedback(): void {
    this._dialog.open(FeedbackModalComponent, {
      data: {
        title: 'Cotação criada com sucesso!',
        description: 'Clique em OK para conferir sua nova cotação.',
        routeToRedirect: '/cotacoes'
      }
    })
  }

  private _clearForm (): void {
    this.priceForm.reset()
  }
}
