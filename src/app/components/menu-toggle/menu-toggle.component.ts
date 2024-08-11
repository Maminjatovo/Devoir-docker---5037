import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss'],
})
export class MenuToggleComponent implements OnInit {

  iconStyle = {
    border: '0px solid rgba(44, 91, 121, 0.911)',
    borderRadius: '0px',
    width: '50px',
    height: '50px',
    color: 'rgba(44, 91, 121, 0.911)',
    fontSize: '5rem',
  }

  constructor() { }

  ngOnInit() {
    return
  }

}
