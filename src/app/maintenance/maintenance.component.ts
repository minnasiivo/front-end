import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthenticationServiceService } from '../services/authentication-service.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(public authService: AuthenticationServiceService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logOut();
  }


}
