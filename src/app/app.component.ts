import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls : ['app.component.scss'],
 
})
export class AppComponent implements OnInit   {
  
  constructor() {
    this.initializeApp();
  }

  ngOnInit() {
    //this.showSplashScreen();
    return
  }

  initializeApp() {
  
    SplashScreen.hide();
  }

}
