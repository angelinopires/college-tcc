import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { requests } from '@mocks'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private _storageService: StorageService) { }

  public initializeRequests (): void {
    this._storageService.setItem('requests', JSON.stringify(requests))
  }

  public getRequests (): Request[] {
    return JSON.parse(this._storageService.getItem('requests')) || requests
  }
}
