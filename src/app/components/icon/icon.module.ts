import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports : [IconComponent]
})
export class IconModule { }
