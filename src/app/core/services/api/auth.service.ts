import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  async isLoggedIn(): Promise<boolean> {
    try {
      // Vérifiez si l'utilisateur est connecté en lisant la clé 'user' dans les préférences
      const token = await Preferences.get({ key: 'user' });
      return !!token.value; // retourne true si un token existe, sinon false
    } catch (error) {
      console.error('Erreur lors de la vérification de la connexion:', error);
      return false; // En cas d'erreur, considérez l'utilisateur comme non connecté
    }
  }

  /*async logCli(data: any): Promise<any> {
    return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/logCli`, data));
  }*/
  async getToken(): Promise<any> {
    try {
      const token = await Preferences.get({ key: 'user' });
      return token.value;
    } catch (error) {
      console.error('Erreur lors de la récupération du token:', error);
      return null;
    }
  }


  async logCli(credentials: any): Promise<any> {
    try {
      return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/logCli`, credentials));
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  }

  async validateLog(data: any): Promise<any> {
    return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/validateLog`, data));
  }


  async registerCli(data: any): Promise<any> {
    return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/registerCli`, data));
  }

  async validateReg(data: any): Promise<any> {
    return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/validateReg`, data));
  }

  async logoutCli(): Promise<any> {
    try {
      return await lastValueFrom(this.http.post<any>(`${this.apiUrl}/logout`,null));
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  }


  //Text
}
