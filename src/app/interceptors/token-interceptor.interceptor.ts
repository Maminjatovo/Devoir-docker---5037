import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';
import { EMPTY, Observable, catchError, from, switchMap } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  token = null;

  constructor() {}

  async getAuthorisation(): Promise<string | null> {
    const ret: GetResult = await Preferences.get({ key: 'authorisation' });
    if (ret.value !== null) {
      const authorisation = JSON.parse(ret.value);
      return authorisation.token;
    } else {
      return null;
    }
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return from(this.getAuthorisation()).pipe(
      switchMap((token) => {
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        return next.handle(request);
      }),
      catchError((error) => {
        // Gérer les erreurs ici
        console.error('Une erreur est survenue :', error);
        return EMPTY; // Retourner un observable vide pour terminer le flux
      })
    );
  }
}
