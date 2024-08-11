import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-modal',
  styleUrls: ['./image-modal.component.scss'],
  templateUrl: './image-modal.component.html',
})
export class ImageModalComponent implements OnInit {
  @ViewChild('textContainer') textContainer: ElementRef | undefined;
  imageData: string | any;

  @Input() imageDataUrl: string | undefined;

  isModalOpen = false;

  fileUrl = environment.fileUrl;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    return
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  convertTextToImage() {
    if (this.textContainer && this.textContainer.nativeElement) {
      const element = this.textContainer.nativeElement;
      html2canvas(element).then(async (canvas) => {
        const ctx = canvas.getContext('2d');
        if (ctx) { // Vérifier si le contexte est défini
          ctx.font = '20px Arial'; // Police et taille du texte
          ctx.fillText('Exemple de texte à convertir en image', 10, 50); // Position du texte sur le canvas

          const imageData = canvas.toDataURL('image/png');
          console.log(imageData); // Pour afficher les données de l'image dans la console
          await this.presentModal(imageData);
        }
      });
    }
  }

  async presentModal(imageData: string) {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        imageData: imageData,
      },
    });
    return await modal.present();
  }

  async closeModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      await modal.dismiss(/* données à renvoyer à la page appelante si nécessaire */);
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
