import { Injectable } from '@angular/core';
import { Material } from '@projectTypes/index';
import { materials } from '@mocks/materials'

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor() { }

  public getMaterials (): Material[] {
    return materials
  }
}
