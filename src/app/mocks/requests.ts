import { Request, RequestWOMaterial } from '@projectTypes/index'
import { Materials } from '@mocks/materials'
import { Users } from '@mocks/users'

export class Requests {
  users = new Users()
  materials = new Materials()
  requests: Request[] = []

  constructor () {
    this.requests = [
      {
        desiredDate: "2019-10-18T16:37:58.979Z",
        id: 1,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(0, 5),
        priority: "Alta",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(1),
        status: "Em análise"
      },
      {
        desiredDate: "2019-10-19T16:37:58.979Z",
        id: 2,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(5, 10),
        priority: "Baixa",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(2),
        status: "Em análise"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 3,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(10, 15),
        priority: "Crítica",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(3),
        status: "Concluído"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 4,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(15, 20),
        priority: "Baixa",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(4),
        status: "Negado"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 5,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(20, 25),
        priority: "Alta",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(4),
        status: "Concluído"
      }
    ]
  }

  public getRequestById (id: number) : Request {
    return this.requests.find(request => request.id === id)
  }

  public getAllRequests (): Request[] {
    return this.requests
  }

  public getRequestWithoutMaterials (id: number): RequestWOMaterial {
    const request = this.getRequestById(id)
    const { materials, ...rest } = request

    return {
      ...rest
    }
  }
}
