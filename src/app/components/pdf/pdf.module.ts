import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
//import { PdfRoutingModule } from './pdf-routing.module';
import { PdfComponent } from './pdf.component';




@NgModule({
  declarations: [PdfComponent],
  imports: [
  
    IonicModule,
    CommonModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    //ExploreContainerComponentModule,
    //PdfRoutingModule


  ]
  ,
  exports : [PdfComponent]
})
export class PdfModule { }
