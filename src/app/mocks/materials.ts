import { Material } from '@projectTypes/index'

const materials: Material[] = [
  {
    id: 1,
    description: "Lingote de Aço",
    unity: "UN",
    weight: 10000,
    width: 100,
    height: 10,
    createdAt: "2019-10-19T16:37:58.979Z",
    attendanceDate: "2019-10-19T17:37:58.979Z",
    active: true,
    groupId: 1,
    amount: 10
  },
  {
    id: 2,
    description: "Parafuso sextavado",
    unity: "CX",
    weight: 25000,
    width: 27.7,
    height: 5.85,
    createdAt: "2019-10-19T16:37:58.979Z",
    attendanceDate: "2019-10-19T17:37:58.979Z",
    active: true,
    groupId: 2,
    amount: 10
  },
  {
    id: 3,
    description: "Caneta azul BIC",
    unity: "CX",
    weight: 3.200,
    width: 38,
    height: 5,
    createdAt: "2019-10-19T16:37:58.979Z",
    attendanceDate: "2019-10-19T17:37:58.979Z",
    active: true,
    groupId: 3,
    amount: 10
  }
]

export { materials }
