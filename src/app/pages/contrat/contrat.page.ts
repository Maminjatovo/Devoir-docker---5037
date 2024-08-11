import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GetResult, Preferences } from '@capacitor/preferences';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ImageHeaderModule } from 'src/app/components/image-header/image-header.module';
import { TriangleColorModule } from 'src/app/components/triangle-color/triangle-color.module';
import { ContratService } from 'src/app/core/services/api/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.page.html',
  styleUrls: ['./contrat.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ImageHeaderModule,
    TriangleColorModule,
  ],
})
export class ContratPage implements OnInit {
  contrats: any[] = [];
  loading: boolean = true;
  selectedUser: any = null;
  isOpen: boolean = false;

  id = 0;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    // Injectez votre service d'authentification
    private contratService: ContratService,
    private router: Router
  ) {}

  async ngOnInit() {
    //this.getAuthorisation();

    await this.fetchData();
  }

  async getAuthorisation() {
    const ret: GetResult = await Preferences.get({ key: 'authorisation' });

    if (ret.value !== null) {
      const authorisation = JSON.parse(ret.value);
    }
  }

  async doRefresh(event: any) {
    event.target.complete();
  }

  selectUser(user: any) {
    this.isOpen = true;
    this.selectedUser = user;
    this.openModal();
  }

  openDocumentPage(id: any) {
    this.router.navigate(['/document'], { state: { key: id } });
  }

  async openModal() {
    /* const modal = await this.modalController.create({
        component: DocumentsContractComponent,
        componentProps: {
          user: this.selectedUser
        }
      });
      return await modal.present();*/
  }

  async fetchData() {
    const ret: GetResult = await Preferences.get({ key: 'user' });

    if (ret.value !== null) {
      const p = JSON.parse(ret.value);
     
      const response = await this.contratService.contrats(p.id);

      console.log(response);
      
      if (response.status == 'success') {
        this.contrats = response.contrats;
      } else {
      }
    } else {
      console.error('La valeur retournée est null.');
    }
  }
}
