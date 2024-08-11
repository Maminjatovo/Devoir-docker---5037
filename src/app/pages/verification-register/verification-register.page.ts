import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { IconModule } from 'src/app/components/icon/icon.module';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { SimpleButtonModule } from 'src/app/components/simple-button/simple-button.module';
import { AuthService } from 'src/app/core/services/api/auth.service';

@Component({
  selector: 'app-verification-register',
  templateUrl: './verification-register.page.html',
  styleUrls: ['./verification-register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,LogoModule,SimpleButtonModule,IconModule]
})
export class VerificationRegisterPage implements OnInit {
  applyCustomStyle = true;
  isButtonLg = true;

  code: string = '';
  password: string = '';
  passwordConfirm: string = '';

  constructor(private alertController: AlertController,private authService : AuthService,private route: ActivatedRoute,private router: Router
    , private loadingController: LoadingController) { }

  data = {
    email : "",
    last_name : "",
    first_name : "",
    registration_number : "",
    phone : "",
  };

  ngOnInit() {
   
    const navigationState = this.router.getCurrentNavigation()?.extras.state;
    if (navigationState) {
      const value = navigationState['key']; // récupération de la valeur associée à 'key'
     this.data = value// faire quelque chose avec la valeur récupérée
    }
  }

 async verification(){
    const data = {
      opt_code : this.code,
      password : this.password,

      phone : this.data.phone,    
      email : this.data.email,
      first_name : this.data.first_name,
      last_name : this.data.last_name,
      registration_number : this.data.registration_number
    }
     /* if(this.password != this.passwordConfirm){
          this.presentAlert("Mot de pass different");
      }
      else{*/

        const loading = await this.loadingController.create({
          message: 'Chargement en cours...',
          spinner: 'circles',
        });
        await loading.present();

        await this.authService.validateReg(data).then(
          (response) => {
            if(response.status === 'success'){
                this.router.navigate(['/login'])
            }
            else{
              this.presentAlert('...');
            }
          }
        ).catch(
          (error) => {
            this.presentAlert('code invalide');
          }).finally(() => {
            loading.dismiss();
          });
     // }
  }

  async presentAlert(message : any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: message,
      buttons: ['Fermer'],
    });

    await alert.present();
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}
