import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

// SERVICES
import { LoadingService } from '@services/loading/loading.service';
import { LoginService } from '@services/login/login.service';
import { MaterialService } from '@services/material/material.service';

// TYPES
import { Material, Request, RequestMaterial,  User } from '@projectTypes/index'
import { RequestPriority } from '@enums';
import { RequestService } from '@services/request/request.service';
import { FeedbackModalComponent } from '@shared/components';

interface RequestItem {
  amount: number;
  material: Material
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements AfterViewInit, OnDestroy, OnInit {
  materialsList: Material[] = []
  requestMaterials: RequestItem[] = []
  priorityList = Object.values(RequestPriority)
  userLoggedIn: User
  minDate = new Date()

  requestMaterialForm: FormGroup
  requestForm: FormGroup

  columnsToDisplay = ['id', 'description', 'amount', 'actions'];
  dataSource = new MatTableDataSource()

  materialSubscription: Subscription
  userSubscription: Subscription

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _dialog: MatDialog,
    private fb: FormBuilder,
    private _loadingService: LoadingService,
    private _loginService: LoginService,
    private _materialService: MaterialService,
    private _requestService: RequestService
  ) {
    this.requestMaterialForm = this.fb.group({
      amount: ['', Validators.compose([Validators.required, Validators.min(1)])],
      material: ['', Validators.required]
    })

    this.requestForm = this.fb.group({
      desiredDate: ['', Validators.required],
      justification: [''],
      priority: ['', Validators.required]
    })
  }

  public ngOnInit(): void {
    this._setMaterialsList()
    this._getUserLoggedIn()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.materialSubscription && this.materialSubscription.unsubscribe()
    this.userSubscription && this.userSubscription.unsubscribe()
  }

  public addMaterial (): void {
    if (!this.requestMaterialForm.valid) return

    this._setRequestMaterial(this.requestMaterialForm.value)
    this.requestMaterialForm.reset()
  }

  public removeMaterial (id: number): void {
    const newMaterialsList = this.requestMaterials.filter(requestItem => requestItem.material.id !== id)
    this._setNewDataTable(newMaterialsList)
  }

  public createRequest (): void {
    this._loadingService.show()

    const { desiredDate, priority, justification } = this.requestForm.value
    const materials: RequestMaterial[] = this.requestMaterials.map(requestMaterial => {
      return {
        ...requestMaterial.material,
        amount: requestMaterial.amount
      }
    })

    const priorityMap = new Map([
      ['Baixa', 'LOW'],
      ['Alta','HIGH'],
      ['Crítica', 'CRITICAL']
    ])

    const newRequest: Request = {
      desiredDate: moment(desiredDate).format(),
      id: this._requestService.getLastRequestId() + 1,
      justification,
      materials,
      priority: priorityMap.get(priority),
      requestDate: moment().format(),
      requester: this.userLoggedIn,
      status: 'VALIDATION'
    }

    this._requestService.setNewRequest(newRequest)

    setTimeout(() => {
      this.giveFeedback()
      this._clearForms()
      this._loadingService.hide()
    }, 2000)
  }

  public giveFeedback(): void {
    this._dialog.open(FeedbackModalComponent, {
      data: {
        title: 'Solicitação criada com sucesso!',
        description: 'Clique em OK para conferir sua nova solicitação.',
        routeToRedirect: '/solicitacoes'
      }
    })
  }

  private _setMaterialsList (): void {
    this._materialService.fetchMaterials()

    this.materialSubscription = this._materialService.materials.subscribe(materials => {
      if (materials.length > 0) {
        this.materialsList = materials
      }
    })
  }

  private _setRequestMaterial (requestMaterial: RequestItem): void {
    this.requestMaterials.push(requestMaterial)
    this._setNewDataTable(this.requestMaterials)
  }

  private _setNewDataTable (requestMaterials: RequestItem[]): void {
    this.requestMaterials = requestMaterials
    this.dataSource = new MatTableDataSource(requestMaterials)
    this.dataSource.sort = this.sort
  }

  private _getUserLoggedIn (): void {
    this._loginService.fetchUser()

    this._loginService.userLoggedIn.subscribe(user => {
      if (!user) return

      this.userLoggedIn = user
    })
  }

  private _clearForms (): void {
    this.requestForm.reset()
    this.requestMaterialForm.reset()
  }
}
