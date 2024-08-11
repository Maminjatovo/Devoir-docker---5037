import { Component, OnInit } from '@angular/core';
import * as constant from 'src/app/constant';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
  
  
})

export class PdfComponent  implements OnInit {
  url = constant.pdf_url;
  base64 = '';
  constructor() {
    this.loadLocal();
   }

  ngOnInit() {}
  

  async loadLocal() {
    const data = await Filesystem.readFile({
      path: 'document.pdf',
      directory: Directory.Documents,
    })
    console.log(data);
    this.base64 = data.data as string;;
  }

}
