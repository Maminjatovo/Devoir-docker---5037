import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputImageModalComponent } from './input-image-modal.component';
@NgModule({
  declarations: [InputImageModalComponent],
  imports: [
    CommonModule,IonicModule,FormsModule
  ]
  ,exports : [InputImageModalComponent]
})
export class InputImageModalModule { }
