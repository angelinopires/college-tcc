import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage;

  constructor() {
    this._storage = window.localStorage;
  }

  public getItem (key: string): string | null {
    return  this._storage.getItem(key)
  }

  public setItem (key: string, value: string | null): void {
    if (!key || !value) return

    this._storage.setItem(key, value)
  }

  public removeItem (key: string): void {
    this._storage.removeItem(key)
  }

  public clear (): void {
    this._storage.clear()
  }
}
