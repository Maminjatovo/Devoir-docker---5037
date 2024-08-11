import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { GetResult, Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    let token = await this.getAuthorisation(); // Assurez-vous de stocker votre token Bearer dans un endroit sécurisé
    if (!token) {
      this.router.navigate(['/login']); // Rediriger vers la page de connexion si le token n'est pas présent
      return false;
    } else {
    }

    // Vous pouvez également ajouter une logique de validation du token ici
    return true;
  }

  async getAuthorisation() : Promise<string|null> {
    const ret: GetResult = await Preferences.get({ key: 'authorisation' });
    if (ret.value !== null) {
      const authorisation = JSON.parse(ret.value);

      return authorisation.token;
    } else {
      return null;
    }
  }
}
