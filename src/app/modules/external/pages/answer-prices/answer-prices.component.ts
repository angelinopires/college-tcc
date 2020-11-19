import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

// COMPONENTS
import { FeedbackModalComponent } from '@shared/components';

// SERVICES
import { LoadingService } from '@services/loading/loading.service';
import { PriceService } from '@services/price/price.service'
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { Price, PriceMaterial, RequestMaterial, User } from '@projectTypes/index'
import { PriceStatus } from '@enums'

interface MaterialWithPrice extends RequestMaterial {
  unityPrice: number;
}

@Component({
  selector: 'app-answer-prices',
  templateUrl: './answer-prices.component.html',
  styleUrls: ['./answer-prices.component.scss'],
  animations: [trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*', minHeight: "*"})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])]
})
export class AnswerPricesComponent implements AfterViewInit, OnDestroy, OnInit {
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'description', 'unityType', 'amount', 'price', 'subtotal'];
  priceId: number
  priceStatusEnum = PriceStatus
  expandedElement: Request | null;
  @ViewChild(MatSort) sort: MatSort;

  pricesMaterialSubscription: Subscription
  materialsWithPrices: MaterialWithPrice[] = []

  priceForm: FormGroup
  minDate = new Date()
  userLoggedIn: User

  constructor (
    private _dialog: MatDialog,
    private _loadingService: LoadingService,
    private _priceService: PriceService,
    private _storageService: StorageService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.priceForm = this.fb.group({
      suggestedDate: ['', Validators.required],
      fare: ['', Validators.required]
    })
  }

  public ngOnInit (): void {
    this._getPriceId()
    this._getUser()
    this._setPricesList()
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.pricesMaterialSubscription && this.pricesMaterialSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  public getMaterialsPrices (priceId: number): void {
    const filteredPricesMaterial = this.dataSource.data.filter((priceMaterial: PriceMaterial) => priceMaterial.priceId === priceId)
    this.dataSource = new MatTableDataSource(filteredPricesMaterial)
  }

  public onInputChange (value: string, material: MaterialWithPrice): void {
    if (!value || !material) return

    const newMaterialList = this.materialsWithPrices.map(mat => {
      if (mat.id === material.id) {
        mat.unityPrice = Number(value)
      }
      return mat
    })

    this.materialsWithPrices = newMaterialList
  }

  public getPriceOfMaterialById (id: number): number {
    const materialFounded = this.materialsWithPrices.find(material => material.id === id)

    return materialFounded.unityPrice
  }

  public getTotalPrice (): number {
    const { fare } = this.priceForm.value
    let total: number = 0

    this.materialsWithPrices.map(materialPrice => {
      if (!materialPrice.amount || !materialPrice.unityPrice) return
      total += Number(materialPrice.amount) * Number(materialPrice.unityPrice)
    })

    return total + Number(fare)
  }

  public isEveryMaterialFullfiled (): boolean {
    return this.materialsWithPrices.every(mat => mat.unityPrice > 0)
  }

  public sendPrices (): void {
    const { suggestedDate, fare } = this.priceForm.value
    const prices = this._priceService.getPricesFromStorage()
    const price = prices.find(pr => pr.id === this.priceId)

    this._loadingService.show()

    const newPrice: Price = {
      ...price,
      fare: Number(fare),
      status: 'ANSWERED',
      suggestedDate: moment(suggestedDate).format(),
      responseDate: moment().format()
    }

    this._priceService.updatePrice(newPrice)
    this._priceService.updatePricesMaterials(this.materialsWithPrices, this.priceId, this.userLoggedIn.department.id)

    setTimeout(() => {
      this.priceForm.reset()
      this._giveFeedback()
      this._loadingService.hide()
    }, 2000)
  }


  private _getPriceId (): void {
    this.activatedRoute.params.subscribe(params => {
      this.priceId = Number(params.id)
    })
  }

  private _setPricesList (): void {
    this._priceService.fetchPrices()

    this.pricesMaterialSubscription = this._priceService.pricesMaterials.subscribe(pricesMaterials => {
      if (pricesMaterials.length <= 0) return

      const filteredMaterials = pricesMaterials.filter(priceMaterial => {
        return priceMaterial.priceId === this.priceId && priceMaterial.provider.id === this.userLoggedIn.department.id
      }).map(priceMaterial => priceMaterial.material)

      this.dataSource = new MatTableDataSource(filteredMaterials)
      this.materialsWithPrices = filteredMaterials.map(material => {
        return {
          ...material,
          unityPrice: 0
        }
      })
    })
  }

  private _getUser (): void {
    this.userLoggedIn = JSON.parse(this._storageService.getItem('userLoggedIn'))
  }

  private _giveFeedback(): void {
    this._dialog.open(FeedbackModalComponent, {
      data: {
        title: 'Sua resposta foi gravada com sucesso!',
        description: 'Clique em OK para continuar.',
        routeToRedirect: '/externo'
      }
    })
  }
}
