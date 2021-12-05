import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { newContacts } from '../add-contact/add-contact.page';
import { ShowDetailsPage} from '../show-details/show-details.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //contacts = contactList;
  contacts : {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[];
  favContacts = favoriteList;
  showList = showUser;
  addedContacts: {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[];
  constructor(private navController: NavController) {
    this.addedContacts = newContacts;

    setTimeout(() => {
      this.contacts = contactList;
    }, 3000);
    
  }
  addContact(){
    this.navController.navigateForward('add-contact');
    console.log("contact added");
  }


  showDetails(_item){
    this.navController.navigateForward('show-details');
    this.showList[0] = _item;
    console.log("item displayed");
    console.log(_item.name + "displayed");
  }

  delete(_item){
    const index = this.contacts.map(function(_item){return _item.name; }).indexOf(_item);
    this.contacts.splice(index,1);
    console.log(_item);
    console.log("item deleted");
  }

  markFav(_item){
    this.favContacts.push(_item);
    console.log(_item.name + "marked favorite");
    console.log(this.favContacts.length);
    console.log(this.favContacts[this.favContacts.length - 1]);
  }


}

export var contactList: {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[] = [
  {name: "Lassaad", prenom:"Aissa", phone: 12345678, phone1: 12345678,dateCreation:"16/11/1993",  dateMAJ:"16/11/1993",img: ""},

];

export var favoriteList: {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[] = [];

export var showUser: {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[] = [];