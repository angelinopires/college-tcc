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
        priority: "LOW",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(1),
        status: "VALIDATION"
      },
      {
        desiredDate: "2019-10-19T16:37:58.979Z",
        id: 2,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(5, 10),
        priority: "LOW",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(2),
        status: "APPROVED"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 3,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(10, 15),
        priority: "HIGH",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(3),
        status: "DECLINED"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 4,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(15, 20),
        priority: "LOW",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(4),
        status: "CANCELED"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 5,
        justification: "Preciso desse material para trabalhar.",
        materials: this.materials.getRandomMaterials(20, 25),
        priority: "CRITICAL",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(4),
        status: "DONE"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 6,
        justification: "",
        materials: this.materials.getRandomMaterials(12, 22),
        priority: "CRITICAL",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.users.getUserById(1),
        status: "APPROVED"
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
