import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SimpleButtonComponent } from './simple-button.component';

@NgModule({
  declarations: [SimpleButtonComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports : [SimpleButtonComponent]
})
export class SimpleButtonModule { }
