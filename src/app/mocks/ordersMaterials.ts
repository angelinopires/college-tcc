import { OrderMaterial } from '@projectTypes/index'
import { Materials } from './materials'

export class OrdersMaterials {
  ordersMaterials: OrderMaterial[] = []
  materials = new Materials()

  constructor() {
    this.ordersMaterials = [
      {
        material: this.materials.getRequestMaterialById(1),
        orderId: 1,
        unityPrice: 5.67
      },
      {
        material: this.materials.getRequestMaterialById(2),
        orderId: 1,
        unityPrice: 45.27
      },
      {
        material: this.materials.getRequestMaterialById(3),
        orderId: 1,
        unityPrice: 7000
      },
      {
        material: this.materials.getRequestMaterialById(3),
        orderId: 2,
        unityPrice: 5.67
      },
      {
        material: this.materials.getRequestMaterialById(4),
        orderId: 2,
        unityPrice: 23
      },
      {
        material: this.materials.getRequestMaterialById(5),
        orderId: 2,
        unityPrice: 1
      },
      {
        material: this.materials.getRequestMaterialById(22),
        orderId: 3,
        unityPrice: 1000
      },
      {
        material: this.materials.getRequestMaterialById(1),
        orderId: 4,
        unityPrice: 5.67
      },
      {
        material: this.materials.getRequestMaterialById(2),
        orderId: 4,
        unityPrice: 45.27
      },
      {
        material: this.materials.getRequestMaterialById(3),
        orderId: 4,
        unityPrice: 7000
      },
      {
        material: this.materials.getRequestMaterialById(11),
        orderId: 5,
        unityPrice: 5.67
      },
      {
        material: this.materials.getRequestMaterialById(21),
        orderId: 5,
        unityPrice: 45.27
      },
      {
        material: this.materials.getRequestMaterialById(13),
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
