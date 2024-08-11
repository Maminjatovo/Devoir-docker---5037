import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async upload(data:any): Promise<any> {
    try {
      return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/upload`,data));
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  }
}
