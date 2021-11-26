import { Injectable } from '@angular/core';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  questions: Array<Question> = [
    new Question("kysytään jotain"),
    new Question("kysymys 2"),
    new Question("kysymys 3"),
  ];


  getQuestions(): any {

    return this.questions;
  }
}
