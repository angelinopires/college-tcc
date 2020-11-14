import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { Requests } from '@mocks/requests'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private _storageService: StorageService) { }

  public initializeRequests (): void {
    const requests = new Requests()

    this._storageService.setItem('requests', JSON.stringify(requests.getAllRequests()))
  }

  public getRequests (): Request[] {
    return JSON.parse(this._storageService.getItem('requests'))
  }
}
