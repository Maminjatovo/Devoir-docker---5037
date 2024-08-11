import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { LinkItemModule } from '../link-item/link-item.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,IonicModule,IconModule,ButtonModule,LinkItemModule
  ],
  exports : [MenuComponent]
})
export class MenuModule { }
