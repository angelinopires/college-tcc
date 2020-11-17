import { Price } from '@projectTypes/index'
import { Users } from './users'

export class Prices {
  prices: Price[] = []

  constructor () {
    this.prices = [
      {
        deadlineDate: "2019-10-19T16:37:58.979Z",
        description: "Essa é a descrição da cotação",
        id: 1,
        requestDate: "2019-10-18T16:37:58.979Z",
        status: "ANSWERED",
        fare: 23.12,
        responseDate: '2020-10-21T16:37:58.979Z',
        suggestedDate: '2020-10-30T16:37:58.979Z'
      },
      {
        deadlineDate: "2019-10-20T16:37:58.979Z",
        description: "Essa é a descrição da cotação",
        id: 2,
        requestDate: "2019-10-19T16:37:58.979Z",
        status: "ANSWERED",
        fare: 23.12,
        responseDate: '2020-10-21T16:37:58.979Z',
        suggestedDate: '2020-10-30T16:37:58.979Z'
      },
      {
        deadlineDate: "2019-10-21T16:37:58.979Z",
        description: "Essa é a descrição da cotação",
        id: 3,
        requestDate: "2019-10-20T16:37:58.979Z",
        status: "CANCELED",
        fare: 123.12,
        responseDate: '2020-10-21T16:37:58.979Z',
        suggestedDate: '2020-10-30T16:37:58.979Z'
      },
      {
        deadlineDate: "2019-10-21T16:37:58.979Z",
        description: "Essa é a descrição da cotação",
        id: 4,
        requestDate: "2019-10-20T16:37:58.979Z",
        status: "DONE",
        fare: 1023.12,
        responseDate: '2020-10-18T16:37:58.979Z',
        suggestedDate: '2020-10-30T16:37:58.979Z'
      },
      {
        deadlineDate: "2019-10-21T16:37:58.979Z",
        description: "Essa é a descrição da cotação",
        id: 5,
        requestDate: "2019-10-20T16:37:58.979Z",
        status: "WAITING",
      }
    ]
  }

  public getPriceById (id: number): Price {
    return this.prices.find(user => user.id === id)
  }

  public getAllPrices (): Price[] {
    return this.prices
  }
}
