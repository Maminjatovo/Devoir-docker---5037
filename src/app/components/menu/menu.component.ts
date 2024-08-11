import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/api/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  routerLink: string = '/login';

  imageUrl = 'assets/image/f2l.jpg';
  paths: any = [
    { name: 'Mes contrats', url: '/contrat' },
    { name: 'Nous-contacter', url: '/contact' },
    { name: 'MON COMPTE', url: '/profil' },
  ];

  iconStyle: any = {
    border: '1px solid rgba(0, 0, 0, .5)',
    borderRadius: 5,
    width: 45,
    height: 45,
    color: 'rgba(51, 51, 51, .5)',
    fontSize: 3,
  };

  alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
       
      },
    },
    {
      text: 'OK',
      handler: () => {
        this.deconnecter();
      },
    },
  ];

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private authService: AuthService,
    public alertController: AlertController
  ) {}

  navigate(url: string): void {
    this.router.navigate([url]);
  }

  ngOnInit() {
    return;
  }

  isDarkTheme(): boolean {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  async deconnecter() {
    await this.authService
      .logoutCli()
      .then((response: any) => {
        // Traitement de la réponse
        if (response.status == 'success') {
          this.removeAuthorisation();
          this.router.navigate(['/login']);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});

    //
  }

  async removeAuthorisation() {
    await Preferences.remove({ key: 'authorisation' });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Deconnexion!',
      buttons: this.alertButtons,
    });

    await alert.present();
  }
}
