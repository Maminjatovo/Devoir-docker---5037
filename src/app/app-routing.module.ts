import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'document',
    pathMatch: 'full',

  },


  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    //canActivate:[LoginGuard]
  },
  {
    path: 'inscription',
    loadComponent: () => import('./pages/inscription/inscription.page').then(m => m.InscriptionPage),

  },
  {
    path: 'verification',
    loadComponent: () => import('./pages/verification/verification.page').then(m => m.VerificationPage),
   
  },
  {
    path: 'verification-register',
    loadComponent: () => import('./pages/verification-register/verification-register.page').then(m => m.VerificationRegisterPage),
  
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage),
     canActivate: [AuthGuard]
  },
  {
    path: 'contrat',
    loadComponent: () => import('./pages/contrat/contrat.page').then(m => m.ContratPage),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then(m => m.ProfilPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'document/tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'document',
    loadComponent: () => import('./pages/document/document.page').then(m => m.DocumentPage),
    //canActivate: [AuthGuard]
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

