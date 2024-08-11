import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TriangleColorComponent } from './triangle-color.component';

@NgModule({
  declarations: [TriangleColorComponent],
  imports: [
    CommonModule,IonicModule
  ],exports : [TriangleColorComponent]
})
export class TriangleColorModule { }
