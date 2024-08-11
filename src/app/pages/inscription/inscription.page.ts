import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { ButtonModule } from 'src/app/components/button/button.module';
import { IconModule } from 'src/app/components/icon/icon.module';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { SimpleButtonModule } from 'src/app/components/simple-button/simple-button.module';
import { AuthService } from 'src/app/core/services/api/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ButtonModule, FormsModule, LogoModule, SimpleButtonModule,IconModule]
})
export class InscriptionPage implements OnInit {
  applyCustomStyle = true;
  isButtonLg = true;

  /** CHAMP */
  numero: string = '';
  telephone: string = '';
  nom: string = '';
  prenom: string = '';
  email: string = '';

  constructor(private router: Router, private authService: AuthService, private alertController: AlertController
    , private loadingController: LoadingController) { }

  ngOnInit() {
    return
  }
  goBack() {
    this.router.navigate(['/login']);
  }


  async inscription() {
    const data = {
      email: this.email,
      last_name: this.nom,
      first_name: this.prenom,
      registration_number: this.numero,
      phone: this.telephone,
    }
    const loading = await this.loadingController.create({
      message: 'Chargement en cours...',
      spinner: 'circles',
    });
    await loading.present();
    await this.authService.registerCli(data).then(
      (response) => {
        if (response.status === 'success') {
          //this.router.navigate(['/verification-register'], { state: { key: data } });
          this.router.navigate(['/login'], { state: { key: data } });
        }
        else {
          this.presentAlert('...');
        }
      }
    ).catch((error) => {
      this.presentAlert(error.error.error);
    }).finally(() => {
      loading.dismiss();
    });
  }

  async presentAlert(message: any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: ['Fermer'],
    });

    await alert.present();
  }

}
