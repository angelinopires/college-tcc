import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// MOCKS
import { Requests } from '@mocks/requests'

// SERVICES
import { StorageService } from '@services/storage/storage.service';

// TYPES
import { Request } from '@projectTypes/index'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private _requestsSubject = new BehaviorSubject<Request[]>([] as Request[]);
  public requests = this._requestsSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private _storageService: StorageService) { }

  public getRequestsFromStorage (): Request[] {
    return JSON.parse(this._storageService.getItem('requests'))
  }

  public initializeRequests (): void {
    const requestsFromStorage = this.getRequestsFromStorage()

    if (!requestsFromStorage) {
      const requests = new Requests()
      this._setLocalStorage(requests.getAllRequests())
    }
  }

  public setNewRequest (request: Request): void {
    if (!request) return

    const requests = this.getRequestsFromStorage()
    requests.push(request)

    this._setRequestsSubject(requests)
    this._setLocalStorage(requests)
  }

  public fetchRequests (): void {
    const requestsFromStorage = this.getRequestsFromStorage()
    this._setRequestsSubject(requestsFromStorage)
  }

  public getLastRequestId (): number {
    const requests = this.getRequestsFromStorage()

    return requests[requests.length - 1].id
  }

  public setRequestStatus(id: number, status: string): void {
    const requestsFromStorage = this.getRequestsFromStorage()
    const request = requestsFromStorage.find(request => request.id === id)
    const requestIndex = requestsFromStorage.findIndex(request => request.id === id)

    if (!request) return

    request.status = status
    requestsFromStorage[requestIndex] = request

    this._setRequestsSubject(requestsFromStorage)
    this._setLocalStorage(requestsFromStorage)
  }

  private _setRequestsSubject (requests: Request[]): void {
    this._requestsSubject.next(requests)
  }

  private _setLocalStorage (requests: Request[]): void {
    this._storageService.setItem('requests', JSON.stringify(requests))
  }
}
