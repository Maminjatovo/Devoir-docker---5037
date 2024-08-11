import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent  implements OnInit {
  @Input() text: string = "";
  @Input() value: string = "";
  @Input() icon: string = "";
  constructor() { }

  ngOnInit() {
    return
  }

}
