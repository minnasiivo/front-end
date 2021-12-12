import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationServiceService } from '../services/authentication-service.service';


@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(public router: Router, afAuth: AngularFireAuth, public authService: AuthenticationServiceService) {
    afAuth.authState;

    this.password = '';
    this.email = '';
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['calculator']);
  }
  login() {
    console.log("loginComponentilta email ja salasana: " + this.email + this.password)
    this.authService.login(this.email, this.password);

    this.router.navigate(['maintenance']);
    //this.authService.checkLogedInUser();
  }

}
