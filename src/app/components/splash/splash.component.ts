import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      // Naviguer vers la page principale après la temporisation
      this.router.navigate(['/login']);
    }, 3000);

  }

}
