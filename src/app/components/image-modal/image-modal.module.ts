import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IconModule } from '../icon/icon.module';
import { ImageModalComponent } from './image-modal.component';

@NgModule({

  declarations: [ImageModalComponent],
  imports: [
    CommonModule,IonicModule,IconModule

  ],
  exports : [ImageModalComponent]

})
export class ImageModalModule { }
