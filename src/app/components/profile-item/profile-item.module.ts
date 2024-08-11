import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IconModule } from '../icon/icon.module';
import { ProfileItemComponent } from './profile-item.component';

@NgModule({
  declarations: [ProfileItemComponent],
  imports: [
    CommonModule,IonicModule,IconModule
  ],
  exports : [ProfileItemComponent]
})
export class ProfileItemModule { }
