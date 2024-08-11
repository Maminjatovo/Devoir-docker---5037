import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LinkItemComponent } from './link-item.component';

@NgModule({
  declarations: [LinkItemComponent],
  imports: [
    CommonModule,IonicModule,RouterModule
  ],
  exports : [LinkItemComponent]
})
export class LinkItemModule { }
