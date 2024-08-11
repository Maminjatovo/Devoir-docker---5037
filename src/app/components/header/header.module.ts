import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonModule } from '../button/button.module';
import { MenuToggleModule } from '../menu-toggle/menu-toggle.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, IonicModule, MenuToggleModule, ButtonModule
  ],
  
  exports: [HeaderComponent]
})
export class HeaderModule { }
