import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { DataService } from '../services/data.service';
import { Question } from '../question';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  displayedColumns = ['position', 'name'];
  dataSource: Array<Question>;
  //dataSource$: Observable<any>;
  editing: boolean;

  constructor(public authService: AuthenticationServiceService, private qservice: DataService) {
    this.dataSource = this.qservice.getQuestions();

    this.editing = false;
  }


  ngOnInit(): void {

  }
  logout() {
    this.authService.logOut();
  }

  private action(row: any) {
    this.editing = true;
  }

}
