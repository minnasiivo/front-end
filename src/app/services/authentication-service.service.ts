import { ValueTransformer } from '@angular/compiler/src/util';
import { Injectable, NgZone } from '@angular/core';
//import { AngularFireAuth } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transform } from 'stream';
import { __values } from 'tslib';
import { DialogComponent } from '../dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
  myEmail: any;

  constructor(public afAuth: AngularFireAuth, public router: Router, public dialog: MatDialog) {
    this.afAuth.authState.subscribe((user: any) => {
      if (user != null) this.userEmail.next(user.email);
    });
    this.myEmail = '';
  }


  login(email: any, password: any) {
    this.myEmail = email;
    console.log("testataa miltä myEmail näyttää " + this.myEmail)

    console.log("hiphei" + email + password);
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.userEmail.next(email);
        console.log("eee: " + email + password);
        this.userEmail.next(email);
        this.router.navigate(['maintenance']);
        this.checkLogedInUser();
      })
      .catch((error: any) => {
        this.openDialog();
        console.log(error.message);
        console.log("error ilmoitus: " + email + password);
      })

  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      //this.userEmail = new BehaviorSubject<string>('');
      this.userEmail.next('');
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  checkLogedInUser(): Observable<any> {
    console.log(this.userEmail + 'tämä tieto tulee palvelun check Logged in user-metodista' + this.myEmail)

    //palauttaa kirjautuneen käyttäjän sähköpostin
    return this.userEmail;
    //return this.myEmail;

  }

  getLoggedInUser(): any {
    //funktiota kutsutaan canActivate()-funktiossa
    return this.afAuth.authState;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Dialog'
    };
    this.dialog.open(DialogComponent, dialogConfig);
  }


}


