import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashComponent } from './splash.component';

@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[SplashComponent]
})
export class SplashModule { }
