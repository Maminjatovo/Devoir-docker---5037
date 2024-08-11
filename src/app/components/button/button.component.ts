import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() isButtonLg: boolean = false;
  @Input() size: string = "default";
  @Input() routerLink: string = "/";
  constructor() { }
  ngOnInit() {
    return
  }

}
