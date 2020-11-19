import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

// COMPONENTS
import { FeedbackModalComponent } from '@shared/components';

// SERVICES
import { LoadingService } from '@services/loading/loading.service';
import { OrderService } from '@services/order/order.service';
import { PriceService } from '@services/price/price.service';
import { ProvidersService } from '@services/providers/providers.service';

// TYPES
import { PriceStatus } from '@enums'
import { Order, OrderMaterial, PriceMaterial, Provider } from '@projectTypes/index'
import { MatDialog } from '@angular/material/dialog';

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
  dataSource = new MatTableDataSource()
  materialDataSource = new MatTableDataSource()
  columnsToDisplay = ['radio', 'id', 'description', 'requestDate', 'deadline', 'status', 'responseDate', 'suggestedDate', 'actions']
  materialColumns = ['id', 'description', 'amount', 'price', 'subtotal']
  priceStatusEnum = PriceStatus
  expandedElement: Request | null;
  @ViewChild(MatSort) sort: MatSort;

  orderForm: FormGroup
  priceForm: FormGroup
  providersList: Provider[]

  pricesMaterialsList: PriceMaterial[] = []
  pricesMaterialSubscription: Subscription
  pricesSubscription: Subscription
  providerSubscription: Subscription

  newOrder: Order
  newOrderMaterials: OrderMaterial[] = []

  constructor(
    private fb: FormBuilder,
    private _dialog: MatDialog,
    private _loadingService: LoadingService,
    private _orderService: OrderService,
    private _priceService: PriceService,
    private _providerService: ProvidersService
  ) {
    this.orderForm = this.fb.group({
      provider: ['', Validators.required],
    })
    this.priceForm = this.fb.group({
      selectedPrice: ['', Validators.required]
    })
  }

  public ngOnInit(): void {
    this._setProvidersList()
    this._setPricesList()

    this.priceForm.valueChanges.subscribe((data): void => {
      if (!data || !data.selectedPrice) return

      const { provider } = this.orderForm.value
      const { fare, id, suggestedDate } = data.selectedPrice

      this.newOrder = {
        createdAt: moment().format(),
        deadlineDate: suggestedDate,
        fare,
        id: this._orderService.getLastOrderId() + 1,
        provider: provider,
        status: "SENDED"
      }

      const priceMaterials = this.getMaterialsPrices(id)
      this.newOrderMaterials = priceMaterials.map(priceMaterial => {
        return {
          material: priceMaterial.material,
          unityPrice: priceMaterial.unityPrice,
          orderId: this.newOrder.id
        }
      })

      this.materialDataSource = new MatTableDataSource(this.newOrderMaterials)
    })
  }

  public ngAfterViewInit (): void {
    this.dataSource.sort = this.sort
  }

  public ngOnDestroy (): void {
    this.pricesMaterialSubscription && this.pricesMaterialSubscription.unsubscribe()
    this.pricesSubscription && this.pricesSubscription.unsubscribe()
    this.providerSubscription && this.providerSubscription.unsubscribe()
  }

  public applyFilter (filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

  public getMaterialsPrices (priceId: number): PriceMaterial[] {
    const { provider } = this.orderForm.value

    return this.pricesMaterialsList.filter(priceMaterial => priceMaterial.priceId === priceId && priceMaterial.provider.id === provider.id)
  }

  public providerHasMaterialPrices (priceId: number): boolean {
    return this.getMaterialsPrices(priceId).length > 0
  }

  public subTotal (amount: number, price: number): number {
    if (!amount || !price) return 0

    return Number(amount) * Number(price)
  }

  public getTotalPrice (): number {
    let total: number = 0
    const { selectedPrice } = this.priceForm.value
    const materialsPrices = this.getMaterialsPrices(selectedPrice.id)

    materialsPrices.map(materialPrice => {
      total += materialPrice.material.amount * materialPrice.unityPrice
    })

    return total + selectedPrice.fare
  }

  public getFarePrice (): number {
    const { selectedPrice } = this.priceForm.value

    return selectedPrice.fare
  }

  public clearProviderForm (): void {
    this.orderForm.reset()
  }

  public clearPriceForm (): void {
    this.priceForm.reset()
  }

  public createOrder (): void {
    const { selectedPrice } = this.priceForm.value
    this._loadingService.show()

    this._orderService.setNewOrder(this.newOrder, selectedPrice.id)
    this._orderService.setNewOrdersMaterials(this.newOrderMaterials)

    setTimeout(() => {
      this.newOrder = null
      this.newOrderMaterials = []
      this.clearPriceForm()
      this.clearProviderForm()
      this._giveFeedback()
      this._loadingService.hide()
    }, 2000)
  }

  private _giveFeedback(): void {
    this._dialog.open(FeedbackModalComponent, {
      data: {
        title: 'Pedido de compras criado com sucesso!',
        description: 'Clique em OK para acompanhar seu novo pedido.',
        routeToRedirect: '/pedidos'
      }
    })
  }

  private _setProvidersList (): void {
    this._providerService.fetchProviders()

    this.providerSubscription = this._providerService.providers.subscribe(providers => {
      if (providers.length <= 0) return

      this.providersList = providers
    })
  }

  private _setPricesList (): void {
    this._priceService.fetchPrices()

    this.pricesSubscription = this._priceService.prices.subscribe(prices => {
      if (prices.length <= 0) return

      const filteredPrices = prices.filter(price => price.status === 'ANSWERED')
      this.dataSource = new MatTableDataSource(filteredPrices)
    })

    this.pricesMaterialSubscription = this._priceService.pricesMaterials.subscribe(pricesMaterials => {
      if (pricesMaterials.length <= 0) return

      this.pricesMaterialsList = pricesMaterials
    })
  }
}
