import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Preferences } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setItem(key: string, value: any): Promise<void> {
    await Preferences['set']({ key, value: JSON.stringify(value) });
  }

  async getItem<T>(key: string): Promise<T | null> {
    const result = await Preferences['get']({ key });
    if (result && result.value) {
      return JSON.parse(result.value) as T;
    }
    return null;
  }

  async removeItem(key: string): Promise<void> {
    await Preferences['remove']({ key });
  }

  async clear(): Promise<void> {
    await Preferences['clear']();
  }
}
