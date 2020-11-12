import { Injectable } from '@angular/core';
import { Material } from '@projectTypes/index';
import { Materials } from '@mocks/materials'
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(private _storageService: StorageService) { }

  public initializeRequests (): void {
    const materials = new Materials()
    this._storageService.setItem('materials', JSON.stringify(materials.getAllMaterials()))
  }

  public getMaterials (): Material[] {
    return JSON.parse(this._storageService.getItem('materials'))
  }
}
