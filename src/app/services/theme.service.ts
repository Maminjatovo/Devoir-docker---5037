import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  // Fonction pour basculer entre le thème sombre et clair
  toggleDarkTheme(isDark: boolean): void {
    this.darkTheme.next(isDark);
  }

  // Fonction pour récupérer l'état du thème sombre
  isDarkTheme(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  }
  getTheme(): string {
    // Logique pour récupérer l'état du thème
    return 'dark'; // ou 'light' selon le thème choisi
  }
}
