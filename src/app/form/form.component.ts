import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Person } from '../person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person: Person;

  constructor() {

    this.person = new Person();
  }

  ngOnInit(): void {

  }




  submit() {
    console.log("User informatio:");
    console.log('first name: ' + this.person.firstName);
    console.log('last name: ' + this.person.lastName);
    console.log('identification number: ' + this.person.id);
    console.log('email: ' + this.person.email);
    console.log('username: ' + this.person.userName);
    console.log("--------------------------------------");

    this.person.firstName = '';
    this.person.lastName = '';
    this.person.id = '';
    this.person.email = '';
    this.person.userName = '';

    //this.person.firstName.markAsUntouched();
    //this.person.lastName.setAsPrestine();
    //this.person.id.reset();
    //this.person.email.reset();
    //this.person.userName.reset();


  }

}