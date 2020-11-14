import { Material, Provider, RequestWOMaterial } from '@projectTypes/index'

export interface PriceMaterial {
  priceId: number;
  material: Material;
  request: RequestWOMaterial;
  provider: Provider;
  unityPrice: number;
  materialAmount: number;
}
