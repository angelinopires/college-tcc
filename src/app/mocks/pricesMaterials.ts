import { Materials } from './materials'
import { PriceMaterial } from '@projectTypes/index'
import { Providers } from './providers'
import { Requests } from './requests'

export class PricesMaterials {
  pricesMaterials: PriceMaterial[] = []
  materials = new Materials()
  requests = new Requests()
  providers = new Providers()

  constructor () {
    this.pricesMaterials = [
      {
        material: this.materials.getRequestMaterialById(1),
        priceId: 1,
        provider: this.providers.getProviderById(1),
        request: this.requests.getRequestWithoutMaterials(1),
        unityPrice: 27.99,
      },
      {
        material: this.materials.getRequestMaterialById(1),
        priceId: 1,
        provider: this.providers.getProviderById(2),
        request: this.requests.getRequestWithoutMaterials(1),
        unityPrice: 25.99,
      },
      {
        material: this.materials.getRequestMaterialById(1),
        priceId: 1,
        provider: this.providers.getProviderById(3),
        request: this.requests.getRequestWithoutMaterials(1),
        unityPrice: 30,
      },
      {
        material: this.materials.getRequestMaterialById(2),
        priceId: 1,
        provider: this.providers.getProviderById(1),
        request: this.requests.getRequestWithoutMaterials(2),
        unityPrice: 5000,
      },
      {
        material: this.materials.getRequestMaterialById(2),
        priceId: 1,
        provider: this.providers.getProviderById(2),
        request: this.requests.getRequestWithoutMaterials(2),
        unityPrice: 5000,
      },
      {
        material: this.materials.getRequestMaterialById(2),
        priceId: 1,
        provider: this.providers.getProviderById(3),
        request: this.requests.getRequestWithoutMaterials(2),
        unityPrice: 5000,
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 2,
        provider: this.providers.getProviderById(2),
        request: this.requests.getRequestWithoutMaterials(3),
        unityPrice: 19.99,
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 2,
        provider: this.providers.getProviderById(3),
        request: this.requests.getRequestWithoutMaterials(3),
        unityPrice: 59.99,
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 3,
        provider: this.providers.getProviderById(5),
        request: this.requests.getRequestWithoutMaterials(3),
        unityPrice: 29.99,
      },
      {
        material: this.materials.getRequestMaterialById(6),
        priceId: 3,
        provider: this.providers.getProviderById(2),
        request: this.requests.getRequestWithoutMaterials(2),
        unityPrice: 19.99,
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 4,
        provider: this.providers.getProviderById(3),
        request: this.requests.getRequestWithoutMaterials(3),
        unityPrice: 59.99,
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 4,
        provider: this.providers.getProviderById(5),
        request: this.requests.getRequestWithoutMaterials(3),
        unityPrice: 29.99,
      },
      {
        material: this.materials.getRequestMaterialById(6),
        priceId: 4,
        provider: this.providers.getProviderById(2),
        request: this.requests.getRequestWithoutMaterials(2),
        unityPrice: 19.99,
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 5,
        provider: this.providers.getProviderById(3),
        request: this.requests.getRequestWithoutMaterials(3)
      },
      {
        material: this.materials.getRequestMaterialById(4),
        priceId: 5,
        provider: this.providers.getProviderById(5),
        request: this.requests.getRequestWithoutMaterials(3)
      },
      {
        material: this.materials.getRequestMaterialById(6),
        priceId: 5,
        provider: this.providers.getProviderById(2),
        request: this.requests.getRequestWithoutMaterials(2)
      },
    ]
  }

  public getPriceMaterialById (materialId: number) : PriceMaterial {
    return this.pricesMaterials.find(priceMaterial => priceMaterial.material.id === materialId)
  }

  public getAllPricesMaterials (): PriceMaterial[] {
    return this.pricesMaterials
  }
}
