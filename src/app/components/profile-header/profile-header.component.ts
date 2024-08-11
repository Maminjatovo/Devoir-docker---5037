import { Component, OnInit } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  constructor(private router: Router) {
    
   }

  ngOnInit() {
    return
  }

  goBack() {
    this.router.navigate(['/contrat']);
  }

}
