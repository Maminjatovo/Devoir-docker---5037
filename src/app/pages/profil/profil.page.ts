import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetResult, Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { MenuToggleModule } from 'src/app/components/menu-toggle/menu-toggle.module';
import { ProfileHeaderModule } from 'src/app/components/profile-header/profile-header.module';
import { ProfileItemModule } from 'src/app/components/profile-item/profile-item.module';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileItemModule,
    ProfileHeaderModule,
    MenuToggleModule,
  ],
})
export class ProfilPage implements OnInit {



  profils = [
    {
      text: 'Nom',
      value: '',
      icon: 'assets/icon/nom2.png',
    },
    {
      text: 'Prenom',
      value: '',
      icon: 'assets/icon/nom.png',
    },
    {
      text: 'Telephone',
      value: '',
      icon: 'assets/icon/tel2.svg',
    },
    {
      text: 'Email',
      value: '@gmail.com',
      icon: 'assets/icon/mail2.svg',
    },
    {
      text: 'Date de creation',
      value: '',
      icon: 'assets/icon/date.svg',
    },
  ];

  title = '';

  constructor() {}

  ngOnInit() {
    this.getObject();
    return;
  }

  async getObject() {
    const ret: GetResult = await Preferences.get({ key: 'user' });

    if (ret.value !== null) {
        const p = JSON.parse(ret.value);
        this.title = p.first_name;
        this.profils = [ {
          text: 'Nom',
          value: p.first_name,
          icon: 'assets/icon/nom2.png',
        },
        {
          text: 'Prenom',
          value: p.last_name,
          icon: 'assets/icon/nom.png',
        },
        {
          text: 'Telephone',
          value: p.phone,
          icon: 'assets/icon/tel2.svg',
        },
        {
          text: 'Email',
          value: p.email,
          icon: 'assets/icon/mail2.svg',
        },
        {
          text: 'Date de creation',
          value: this.formatDate(p.created_at),
          icon: 'assets/icon/date.svg',
        },
      ];
        
    } else {
        console.error("La valeur retournée est null.");
    }
  
    
  }
  formatDate(dates:string){
    let dateString = "2024-03-19T04:24:56.000000";
        
    // Créer un objet Date à partir de la chaîne de caractères
    const date = new Date(dates);
    
    // Tableaux de noms de mois et de jours de la semaine
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    // Récupérer le jour, le mois et l'année
    let jour = date.getDate();
    let moisIndex = date.getMonth();
    let annee = date.getFullYear();
    
    // Formater la date
    let dateFormatee = `${jour} ${mois[moisIndex]} ${annee}`;
    
   return dateFormatee; // Afficher la date formatée
    

  }
}

/*
"users": {
        "id": 1,
        "is_admin": 0,
        "first_name": "HERINANTENAINA",
        "last_name": "Berthin",
        "registration_number": "12345",
        "phone": "+261340289144",
        "email": "herinantenaina123mami@gmail.com",
        "is_valid": 0,
        "email_verified_at": null,
        "created_at": "2024-03-18T08:31:51.000000Z",
        "updated_at": "2024-03-18T08:31:51.000000Z",
        "deleted_at": null
    }
*/
