import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import {
  AlertController,
  IonicModule,
  LoadingController,
} from '@ionic/angular';
import { IconModule } from 'src/app/components/icon/icon.module';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { SimpleButtonModule } from 'src/app/components/simple-button/simple-button.module';
import { AuthService } from 'src/app/core/services/api/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LogoModule,
    SimpleButtonModule,
    IconModule
  ],
})
export class VerificationPage implements OnInit {
  applyCustomStyle = true;
  isButtonLg = true;
  logoUrl = 'assets/image/f2l.jpg';
  /** CHAMP */
  code: string = '';

  data = {
    registration_number: '',
    password: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    const navigationState = this.router.getCurrentNavigation()?.extras.state;
    if (navigationState) {
      const value = navigationState['key'];
      this.data = value;
      console.log(this.data);
    }
    return;
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  async verification() {
    const data = {
      opt_code: this.code,
      registration_number: this.data.registration_number,
      password: this.data.password,
    };
    // console.log(data);

    const loading = await this.loadingController.create({
      message: 'Chargement en cours...',
      spinner: 'circles',
    });
    await loading.present();

    await this.authService
      .validateLog(data)
      .then((response) => {
        if (response.status === 'success') {
          this.setObject(response.user);
          this.setAutorisation(response.authorisation);
          loading.dismiss();
          this.router.navigate(['/contrat']);
        } else {
          this.presentAlert(response.message);
        }
      })
      .catch((error) => {
        this.presentAlert('code invalide');
      })
      .finally(() => {
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

  async setObject(user: any) {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(user),
    });
  }

  async setAutorisation(authorisation: any) {
    await Preferences.set({
      key: 'authorisation',
      value: JSON.stringify(authorisation),
    });
  }
}
