import { Component } from '@angular/core';
import { favoriteList, Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favorites: {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[]  ;
  
  constructor() {
    this.favorites= favoriteList;
    console.log(this.favorites);
    console.log(this.favorites.length);
  }

}

