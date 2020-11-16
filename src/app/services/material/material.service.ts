import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// MOCKS
import { Materials } from '@mocks/materials'

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { Material } from '@projectTypes/index';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private _materialsSubject = new BehaviorSubject<Material[]>([] as Material[]);
  public materials = this._materialsSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private _storageService: StorageService) { }

  public getMaterialsFromStorage (): Material[] {
    return JSON.parse(this._storageService.getItem('materials'))
  }

  public initializeMaterials (): void {
    const materialsFromStorage = this.getMaterialsFromStorage()

    if (!materialsFromStorage) {
      const materialsClass = new Materials()

      this._storageService.setItem('materials', JSON.stringify(materialsClass.getAllMaterials()))
    }
  }

  public fetchMaterials (): void {
    const materialsFromStorage = this.getMaterialsFromStorage()
    this._setMaterialsSubject(materialsFromStorage)
  }

  private _setMaterialsSubject (materials: Material[]): void {
    this._materialsSubject.next(materials)
  }
}
