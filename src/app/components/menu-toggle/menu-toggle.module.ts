import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuToggleComponent } from './menu-toggle.component';

@NgModule({
  declarations: [MenuToggleComponent],
  imports: [
    CommonModule,IonicModule
  ]
  ,exports : [MenuToggleComponent]
})
export class MenuToggleModule { }
