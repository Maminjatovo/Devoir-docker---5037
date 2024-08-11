import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import {
  AlertController,
  IonicModule,
  LoadingController,
} from '@ionic/angular';
import { ButtonModule } from 'src/app/components/button/button.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { SimpleButtonModule } from 'src/app/components/simple-button/simple-button.module';
import { AuthService } from 'src/app/core/services/api/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ButtonModule,
    LogoModule,
    SimpleButtonModule

  ],
})
export class LoginPage implements OnInit {
  pageTitle: string = 'Login';
  applyCustomStyle = true;
  isButtonLg = true;

  /** CHAMP */
  numero: string = '';
  telephone: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }
  ngOnInit() {
    return;
    
  }

  changeTitle(): void {
    this.pageTitle = 'Login';
  }

  async connection() {
    const data = {
      registration_number: this.numero,
    password: this.telephone,
     //telephone: this.telephone,

    };
    const loading = await this.loadingController.create({
      message: 'Chargement en cours...',
      spinner: 'circles',
    });
    await loading.present();
    await this.authService
      .logCli(data)
      .then((response: any) => {
        // Traitement de la réponse
        if (response.status == 'SUCCESS') {
          this.router.navigate(['/verification'], { state: { key: data } });
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
        
        this.presentAlert(error.error.message);
      })
      .finally(() => {
        loading.dismiss();
      });
  }
  async presentAlert(message: any) {
    const alert = await this.alertController.create({
      header: 'Alert ',
      subHeader: '',
      message: message,
      buttons: ['Fermer'],
    });
    await alert.present();
  }

  ajouterIndicatifPays(nouveauNumero: string) {
    if (!nouveauNumero.startsWith('+33')) {
      this.numero = '+33 ' + nouveauNumero;
    } else {
      this.numero = nouveauNumero;
    }
  }
}
