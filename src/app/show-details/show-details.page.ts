import { Component, OnInit } from '@angular/core';
import { showUser } from '../tab1/tab1.page';
import * as moment from 'moment'; 

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit {
  displayUser:{name: string, prenom: string, phone: number, phone1:number, dateCreation:string, dateMAJ: string, img: string}[];
  constructor() { 
    this.displayUser = showUser;
    console.log(this.displayUser);
  }
  ngOnInit() {
  }

}
