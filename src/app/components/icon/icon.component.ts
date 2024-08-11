import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent  implements OnInit,OnChanges {

  @Input() imgUrl: string = "";
  @Input() zoom : number = 1;



  width : number =  16;
  imageWidth : string = this.width+'px';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['zoom']) {
      this.updateImageWidth();
    }
  }

  ngOnInit() {
    return
  }

  private updateImageWidth(): void {
    this.width = this.zoom * 16;
    this.imageWidth = this.width + 'px';
  }

}
