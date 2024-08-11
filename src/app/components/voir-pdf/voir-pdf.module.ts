import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VoirPdfComponent } from './voir-pdf.component';

@NgModule({

  declarations: [VoirPdfComponent],
  imports: [
    CommonModule,IonicModule,PdfViewerModule
  ],
  exports : [VoirPdfComponent]
  
})
export class VoirPdfModule { }
