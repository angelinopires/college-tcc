import { Groups } from './groups'
import { Material, RequestMaterial} from '@projectTypes/index'

export class Materials {
  materials: Material[] = []
  groups = new Groups()

  constructor () {
    this.materials = [
      {
        id: 1,
        description: "Lingote de Aço 100mmx300mmx40mm",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(1)
      },
      {
        id: 2,
        description: "Lingote de Ferro 200mmx350mmx70mm",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(1)
      },
      {
        id: 3,
        description: "Barra de ferro tubo quadrada 50mmx50mmx2000mm",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(1)
      },
      {
        id: 4,
        description: "Barra CA 50 3/16 4,2MM",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(1)
      },
      {
        id: 5,
        description: "Barra de ferro redonda 10mmx3000mm",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(1)
      },
      {
        id: 6,
        description: "Notebook Lenovo S145",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(2)
      },
      {
        id: 7,
        description: "Mouse logitech sem fio",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(2)
      },
      {
        id: 8,
        description: "Teclado logitech sem fio",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(2)
      },
      {
        id: 9,
        description: "Mousepad 300mmx300mm",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(2)
      },
      {
        id: 10,
        description: "Monitor LG 25Polegadas",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(2)
      },
      {
        id: 11,
        description: "Caneta Bic azul",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(3)
      },
      {
        id: 12,
        description: "Papel sulfite A4",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(3)
      },
      {
        id: 13,
        description: "Post-it",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(3)
      },
      {
        id: 14,
        description: "Agenda",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(3)
      },
      {
        id: 15,
        description: "Lapis Faber Castell",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(3)
      },
      {
        id: 16,
        description: "Capacete",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(4)
      },
      {
        id: 17,
        description: "Oculos de proteção",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(4)
      },
      {
        id: 18,
        description: "Avental",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(4)
      },
      {
        id: 19,
        description: "Respiradores faciais completo",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(4)
      },
      {
        id: 20,
        description: "Luvas",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(4)
      },
      {
        id: 21,
        description: "Cloro 2L",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(5)
      },
      {
        id: 22,
        description: "Desinfetante 2L",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(5)
      },
      {
        id: 23,
        description: "Pano de chão",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(5)
      },
      {
        id: 24,
        description: "Vassoura",
        unity: "UN",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(5)
      },
      {
        id: 25,
        description: "Rodo",
        unity: "CX",
        createdAt: "2019-10-19T16:37:58.979Z",
        attendanceDate: "2019-10-19T17:37:58.979Z",
        active: true,
        group: this.groups.getGroupById(5)
      }
    ]
  }

  public getMaterialById (id: number): Material {
    return this.materials.find(material => material.id === id)
  }

  public getAllMaterials (): Material[] {
    return this.materials
  }

  public getRandomMaterials (startPosition: number, endPosition: number): RequestMaterial[] {
    let requestMaterials: RequestMaterial[] = []
    const materials = this.getAllMaterials()

    for (startPosition; startPosition < endPosition; startPosition++) {
      const material = {
        ...materials[startPosition],
        amount: startPosition + endPosition
      }
      requestMaterials.push(material)
    }

    return requestMaterials
  }
}
