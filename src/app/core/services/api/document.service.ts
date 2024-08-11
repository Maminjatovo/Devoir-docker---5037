import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

 async documents(id : any):  Promise<any> {
    return await lastValueFrom(this.http.get<any>(`${this.apiUrl}/documents/${id}`));
  }

  async store(data : any):  Promise<any> {
    return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/documents`,data));
  }

}
