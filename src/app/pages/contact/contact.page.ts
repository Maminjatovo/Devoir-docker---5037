import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';
import { IconModule } from 'src/app/components/icon/icon.module';
import { ImageHeaderModule } from 'src/app/components/image-header/image-header.module';
import { MenuToggleModule } from 'src/app/components/menu-toggle/menu-toggle.module';
import { SimpleButtonModule } from 'src/app/components/simple-button/simple-button.module';
import { EmailService } from 'src/app/core/services/api/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,IconModule,HeaderModule,SimpleButtonModule,ImageHeaderModule,MenuToggleModule]
})
export class ContactPage implements OnInit {
  logoUrl = 'assets/image/f2l.jpg';
  constructor(private emailService : EmailService, private alertController: AlertController,private loadingController: LoadingController) { }

  /**Champ */
  nom : string = '';
  email : string = '';
  telephone : string = '';
  message : string = '';
  ngOnInit() {
    return ;
  }

 async envoyer(){

  const data = {
    nom: this.nom,
    email: this.email,
    phone: this.telephone,
    message: this.message
  }
  
  const loading = await this.loadingController.create({
    message: 'Chargement en cours...',
    spinner: 'circles',
  });
  await loading.present();

 await this.emailService
  .sendemail(data)
  .then((response: any) => {
    this.presentAlert(response.message);
    this.clearChamp();
  })
  .catch((error) => {
    this.presentAlertError("Une erreur ce produit"); 
  })
  .finally(() => {
    loading.dismiss();
  });
  }

  clearChamp(){
    this.nom = "";
    this.email = "";
    this.telephone = "";
    this.message = "";
  }

  async presentAlert(message: any) {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: message,
      buttons: ['Fermer'],
    });

    await alert.present();
  }
  async presentAlertError(message: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: message,
      buttons: ['Fermer'],
    });

    await alert.present();
  }

}
