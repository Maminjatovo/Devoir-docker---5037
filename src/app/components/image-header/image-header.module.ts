import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImageHeaderComponent } from './image-header.component';

@NgModule({
  declarations: [ImageHeaderComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports : [ImageHeaderComponent]
})
export class ImageHeaderModule { }
