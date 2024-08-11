import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  imageUrl = 'assets/image/f2l.jpg';
  @Input() applyCustomStyle: boolean = false;
  constructor() { }

  ngOnInit() {
    return
  }

}
