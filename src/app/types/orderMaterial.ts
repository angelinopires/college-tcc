import { RequestMaterial } from './material'

export interface OrderMaterial {
  material: RequestMaterial;
  orderId: number;
  unityPrice: number;
}
