import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AuthService } from './core/services/api/auth.service';

/**Interc */
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';


@NgModule({
  declarations: [AppComponent],

  imports: [
    CommonModule, BrowserModule, HttpClientModule, RouterModule.forRoot([]), IonicModule.forRoot({}), AppRoutingModule, MenuModule
  ],

  providers: [
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /**Interceptor */
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true },
    File,
    FileOpener,
  {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },


],
  bootstrap: [AppComponent]
})

export class AppModule { }
