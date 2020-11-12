import { Material, Request, RequestMaterial, User } from '@projectTypes/index'
import { Materials } from '@mocks/materials'
import { users } from '@mocks/users'

class Requests {
  users: User[]
  materials: Material[]

  constructor () {
    const materialsClass = new Materials()

    this.users = users
    this.materials = materialsClass.getMaterials()
  }

  public getRandomMaterials (startPosition: number, endPosition: number): RequestMaterial[] {
    let requestMaterials: RequestMaterial[] = []

    for (startPosition; startPosition < endPosition; startPosition++) {
      const material = {
        ...this.materials[startPosition],
        amount: startPosition + endPosition
      }
      requestMaterials.push(material)
    }

    return requestMaterials
  }

  public getRequesterById (requesterId: number): User {
    return this.users.find(user => user.id === requesterId)
  }

  public getRequests (): Request[] {
    return [
      {
        desiredDate: "2019-10-18T16:37:58.979Z",
        id: 1,
        justification: "Preciso desse material para trabalhar.",
        materials: this.getRandomMaterials(0, 5),
        priority: "Alta",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.getRequesterById(1),
        status: "Em análise"
      },
      {
        desiredDate: "2019-10-19T16:37:58.979Z",
        id: 2,
        justification: "Preciso desse material para trabalhar.",
        materials: this.getRandomMaterials(5, 10),
        priority: "Baixa",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.getRequesterById(2),
        status: "Em análise"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 3,
        justification: "Preciso desse material para trabalhar.",
        materials: this.getRandomMaterials(10, 15),
        priority: "Crítica",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.getRequesterById(3),
        status: "Concluído"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 4,
        justification: "Preciso desse material para trabalhar.",
        materials: this.getRandomMaterials(15, 20),
        priority: "Baixa",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.getRequesterById(4),
        status: "Negado"
      },
      {
        desiredDate: "2019-10-20T16:37:58.979Z",
        id: 5,
        justification: "Preciso desse material para trabalhar.",
        materials: this.getRandomMaterials(20, 25),
        priority: "Alta",
        requestDate: "2019-10-18T16:37:58.979Z",
        requester: this.getRequesterById(4),
        status: "Concluído"
      }
    ]
  }
}

export { Requests }
