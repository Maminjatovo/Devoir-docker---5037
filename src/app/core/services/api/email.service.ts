import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  async sendemail(data : any): Promise<any> {
    return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/sendemail`, data))   ;
  }

}
