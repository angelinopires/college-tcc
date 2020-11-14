import { OrderMaterial } from '@projectTypes/index'
import { Materials } from './materials'

export class OrdersMaterials {
  ordersMaterials: OrderMaterial[] = []
  materials = new Materials()

  constructor() {
    this.ordersMaterials = [
      {
        material: this.materials.getMaterialById(1),
        materialAmount: 1000,
        orderId: 1,
        unityPrice: 5.67
      },
      {
        material: this.materials.getMaterialById(2),
        materialAmount: 1029,
        orderId: 1,
        unityPrice: 45.27
      },
      {
        material: this.materials.getMaterialById(3),
        materialAmount: 1,
        orderId: 1,
        unityPrice: 7000
      },
      {
        material: this.materials.getMaterialById(3),
        materialAmount: 1000,
        orderId: 2,
        unityPrice: 5.67
      },
      {
        material: this.materials.getMaterialById(4),
        materialAmount: 1234,
        orderId: 2,
        unityPrice: 23
      },
      {
        material: this.materials.getMaterialById(5),
        materialAmount: 1,
        orderId: 2,
        unityPrice: 1
      },
      {
        material: this.materials.getMaterialById(22),
        materialAmount: 999,
        orderId: 3,
        unityPrice: 1000
      },
      {
        material: this.materials.getMaterialById(1),
        materialAmount: 1000,
        orderId: 4,
        unityPrice: 5.67
      },
      {
        material: this.materials.getMaterialById(2),
        materialAmount: 1029,
        orderId: 4,
        unityPrice: 45.27
      },
      {
        material: this.materials.getMaterialById(3),
        materialAmount: 1,
        orderId: 4,
        unityPrice: 7000
      },
      {
        material: this.materials.getMaterialById(11),
        materialAmount: 1000,
        orderId: 5,
        unityPrice: 5.67
      },
      {
        material: this.materials.getMaterialById(21),
        materialAmount: 1029,
        orderId: 5,
        unityPrice: 45.27
      },
      {
        material: this.materials.getMaterialById(13),
        materialAmount: 1,
        orderId: 5,
        unityPrice: 7000
      },
    ]
  }

  public getOrderMaterialById(id: number): OrderMaterial {
    return this.ordersMaterials.find(order => order.orderId === id)
  }

  public getAllOrdersMaterials (): OrderMaterial[] {
    return this.ordersMaterials
  }
}
