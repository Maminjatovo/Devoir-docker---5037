import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IconModule } from '../icon/icon.module';
import { MenuToggleModule } from '../menu-toggle/menu-toggle.module';
import { ProfileHeaderComponent } from './profile-header.component';

@NgModule({
  declarations: [ProfileHeaderComponent],
  imports: [
    CommonModule, IonicModule, IconModule, MenuToggleModule
  ],
  exports: [ProfileHeaderComponent]
})
export class ProfileHeaderModule { }
