import { Material } from './material'

export interface OrderMaterial {
  orderId: number;
  material: Material;
  unityPrice: number;
  materialAmount: number;
}
