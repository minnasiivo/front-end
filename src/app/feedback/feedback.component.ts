import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  questions: Array<Question>;
  //questions$: Observable<any>;
  /*= [
    new Question("kysymys 1"),
    new Question("kysymys 2"),
    new Question("kysymys 3"),
  ];*/


  constructor(private qData: DataService) {
    this.questions = this.qData.getQuestions();
    // this.questions$ = this.qData.getQuestions();

  }

  //constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any, q: Question) {
    console.log(event.value);
    console.log(q.answer);
    q.setAnswer(event.value);
  }


}




