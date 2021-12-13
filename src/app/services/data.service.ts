import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    /*this.testi$.subscribe(x => {
      this.questions = x;
      console.log(this.testi$);
    });*/
  }

  questions: Array<Question> = [
    new Question("kysytään jotain"),
    new Question("kysymys 2"),
    new Question("kysymys 3"),
  ];

  //testi$!: Observable<any[]>;





  getQuestions() /*: Observable<any>*/ {
    // return this.testi$;
    return this.questions;
  }
}
