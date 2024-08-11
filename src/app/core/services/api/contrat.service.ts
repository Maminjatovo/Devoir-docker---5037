import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

contrats(id : any):   Promise<any> {
    return lastValueFrom(this.http.get<any>(`${this.apiUrl}/contrats/${id}`));
  }

}
