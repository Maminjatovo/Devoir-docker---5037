import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-input-image-modal',
  templateUrl: './input-image-modal.component.html',
  styleUrls: ['./input-image-modal.component.scss'],
})
export class InputImageModalComponent  implements OnInit {

  nom: string = "";
  imageUrl: string = "";
  constructor(private modalCtrl: ModalController,private navParams: NavParams) { }

  ngOnInit() {
    this.imageUrl = this.navParams.get('imageUrl');
    return
  }



  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {

    const data = {
      imageUrl : "",
      name : this.nom
    }

    return this.modalCtrl.dismiss(data, 'confirm');
  }

}
