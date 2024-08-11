import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  LoadingController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { IconModule } from 'src/app/components/icon/icon.module';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';
import { ImageModalModule } from 'src/app/components/image-modal/image-modal.module';
import { InputImageModalComponent } from 'src/app/components/input-image-modal/input-image-modal.component';
import { InputImageModalModule } from 'src/app/components/input-image-modal/input-image-modal.module';

import { Router } from '@angular/router';
import {
  Camera,
  CameraOptions,
  CameraResultType,
  CameraSource,
} from '@capacitor/camera';

import { PdfModule } from 'src/app/components/pdf/pdf.module';
import { TriangleColorModule } from 'src/app/components/triangle-color/triangle-color.module';
import { DocumentService } from 'src/app/core/services/api/document.service';
import { UploadService } from 'src/app/core/services/api/upload.service';
//const { Camera } = Plugins;

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
  standalone: true,

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IconModule,
    ImageModalModule,
    TriangleColorModule,
    HttpClientModule,
    PdfModule,
    InputImageModalModule,
  ],
  providers: [
    ModalController, // Assurez-vous que ModalController est fourni ici
  ],
})
export class DocumentPage implements OnInit {
  @ViewChild('textContainer', { static: false }) textContainer:
    | ElementRef
    | undefined;
  @ViewChild('textRef', { static: true }) textRef: ElementRef | undefined;
  pdfObj: any;
  loading: boolean = true;
  documents: any[] = [];
  selectedUser: any = null;
  isOpen: boolean = false;
  imageDataUrl: String | any;
  imageData: string = '';
  imageUrl: any = null;
  idContrat: number = 0;

  message =
    'This modal example uses the modalController to present and dismiss modals.';

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private modalController: ModalController,
    private platform: Platform,
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private uploadService: UploadService
  ) {}

  async ngOnInit() {
    await this.fetchData();
  }

  async fetchData(){
    const navigationState =  this.router.getCurrentNavigation()?.extras.state;
    
    if (navigationState) {
      const value = navigationState['key'];
      this.idContrat = value;

      const loading = await this.loadingController.create({
        message: 'Chargement...',
        spinner: 'circles',
      });
      await loading.present();

      await this.documentService
        .documents(this.idContrat)
        .then((response: any) => {
          if (response.status == 'success') {
            this.documents = response.documents;
            console.log("DOCUMENTS==>",response.documents);
          } else { 
          }
        })
        .catch((error: any) => {})
        .finally(() => {
          loading.dismiss();
        });
    }
  }

  async doRefresh(event: any) {
    event.detail.complete(); // Marque le rafraîchissement comme terminé
  }
  goBack() {
    this.router.navigate(['/contrat']);
  }

  voirImage(imageDataUrl: string) {
    this.imageDataUrl = imageDataUrl;
    this.openImageModal();
  }

  async openImageModal() {
    if (true) {
      const modal = await this.modalController.create({
        component: ImageModalComponent,

        componentProps: {
          imageDataUrl: this.imageDataUrl,
        },
      });
      return await modal.present();
    }
  }

  usePhotoGallery = () => {
    const takePhoto = async () => {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
    };

    return {
      takePhoto,
    };
  };

  async takePicture() {
    const options: CameraOptions = {
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    };

    const loading = await this.loadingController.create({
      message: 'Chargement...',
      spinner: 'circles',
    });
    await loading.present();
    try {
      await Camera.getPhoto(options)
        .then((image) => {
          // Traitement réussi de la promesse
          this.imageUrl = image.webPath;
          // this.loading = false; // Désactiver le spinner
          this.openModal();
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error('Erreur lors de la capture de la photo :', error);
          //this.loading = false; // Assurez-vous de désactiver le spinner en cas d'erreur
        })
        .finally(() => {
          loading.dismiss();
        });
    } catch (err) {
      console.log('ERREUR');
    }
  }

  async openModal() {
    console.log('img', this.imageUrl);

    const modal = await this.modalCtrl.create({
      component: InputImageModalComponent,
      componentProps: {
        imageUrl: this.imageUrl,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.uploadImg(this.imageUrl, data.name);
    }
  }

  async uploadImg(blobUrl: string, name: string) {
    await fetch(blobUrl)
      .then((response) => response.blob())
      .then(async (blob) => {
        // Créer un objet File à partir du blob
        const file = new File([blob], 'nom_du_fichier.jpg', {
          type: 'image/jpeg',
        });
        // Créer un objet FormData
        const formData = new FormData();
        formData.append('fichier', file);

        try {
          const responseUpoad = await this.uploadService.upload(formData);
          if (responseUpoad.message === 'success') {
            const data = {
              titre: name,
              path: responseUpoad.path,
              type: responseUpoad.ext,
              contrat_id: this.idContrat,
            };

            const reponseAddDoc = await this.documentService.store(data);
            if (reponseAddDoc.status === 'success') {
              await this.fetchData();
              console.log('BIEN AJOUTER');
            }
          } else {
          }
        } catch (err) {
          console.log(err);
          
        }
      })
      .catch((error) => {
        // Gestion des erreurs
      });
  }
}
