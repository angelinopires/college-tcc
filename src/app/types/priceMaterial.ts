import { RequestMaterial, Provider, RequestWOMaterial } from '@projectTypes/index'

export interface PriceMaterial {
  priceId: number;
  material: RequestMaterial;
  request: RequestWOMaterial;
  provider: Provider;
  unityPrice?: number;
}
