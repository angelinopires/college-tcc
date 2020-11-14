import { Order } from '@projectTypes/index'
import { Providers } from './providers'

export class Orders {
  orders: Order[] = []
  providers = new Providers()

  constructor() {
    this.orders = [
      {
        id: 1,
        status: "DONE",
        createdAt: "2019-10-18T16:37:58.979Z",
        provider: this.providers.getProviderById(1),
        fare: 299.99,
        deadlineDate: '2019-11-18T16:37:58.979Z'
      },
      {
        id: 2,
        status: "VALIDATION",
        createdAt: "2019-10-19T16:37:58.979Z",
        provider: this.providers.getProviderById(2),
        fare: 399.99,
        deadlineDate: '2019-11-19T16:37:58.979Z'
      },
      {
        id: 3,
        status: "DECLINED",
        createdAt: "2019-10-20T16:37:58.979Z",
        provider: this.providers.getProviderById(3),
        fare: 499.99,
        deadlineDate: '2019-11-20T16:37:58.979Z'
      },
      {
        id: 4,
        status: "CANCELED",
        createdAt: "2019-10-21T16:37:58.979Z",
        provider: this.providers.getProviderById(4),
        fare: 599.99,
        deadlineDate: '2019-11-21T16:37:58.979Z'
      },
      {
        id: 5,
        status: "DONE",
        createdAt: "2019-10-22T16:37:58.979Z",
        provider: this.providers.getProviderById(5),
        fare: 199.99,
        deadlineDate: '2019-11-22T16:37:58.979Z'
      }
    ]
  }

  public getOrderById(id: number): Order {
    return this.orders.find(order => order.id === id)
  }

  public getAllOrders(): Order[] {
    return this.orders
  }
}
