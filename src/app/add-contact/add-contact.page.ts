import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactList } from '../tab1/tab1.page';
var datevalidation = new RegExp(['^(?:(?:(?:0?[13578]|1[02])(\\/|-|\\.)31)',             '\\1|(?:(?:0?[1,3-9]|1[0-2])(\\/|-|\\.)(?:29|30)',             '\\2))(?:(?:1[6-9]|[2-9]\\d)?\d{2})$|^(?:0?2(\\/|-|\\.)',             '29\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|',             '[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))',             '$|^(?:(?:0?[1-9])|(?:1[0-2]))(\\/|-|\\.)',             '(?:0?[1-9]|1\\d|2[0-8])\\4',             '(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$'].join(''),"g");

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})


export class AddContactPage implements OnInit {

  addGroup: FormGroup;
  newCon = newContacts;

  constructor( formBuilder: FormBuilder) {
    //contactList.push(this.addGroup.value);
    this.addGroup = formBuilder.group(
      {
        name: ["", [Validators.required]],
        prenom: ["", [Validators.required]],
        phone: ["", [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(13)])]],
        phone1: ["", [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(13)])]],
        dateCreation: ['', Validators.compose([Validators.pattern(datevalidation)])],
        dateMAJ: ['', Validators.compose([Validators.pattern(datevalidation)])],
        img: ["", [Validators.required]]
      }
    );
    
   }

  ngOnInit() {
  }

  addContact(){
    this.newCon = this.addGroup.value;
    contactList.push(this.addGroup.value);
    console.log("Contact Saved Successfully");
    console.log(this.newCon);
  }

}

export var newContacts: {name: string, prenom: string, phone: number,phone1:number, dateCreation:string, dateMAJ:string, img: string}[];

