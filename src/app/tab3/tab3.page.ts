import { Component } from '@angular/core';


import { Filesystem, Directory } from '@capacitor/filesystem';

import * as constant from 'src/app/constant';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  url = constant.pdf_url;
  base64 = '';

  constructor() {
    this.loadLocal();
  }

  async loadLocal() {
    const data = await Filesystem.readFile({
      path: 'document.pdf',
      directory: Directory.Documents,
    })
    console.log(data);
    this.base64 = data.data as string;;
  }
}
