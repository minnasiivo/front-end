import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: string;
  answer: any;


  constructor() {
    this.result = '';
    this.answer = '';
  }

  ngOnInit(): void {
  }
  buttons: String[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  calculatorClick(value: any) {

    try {

      if (value == '=') {
        this.answer = eval(this.result);
        console.log('lausekkeen arvo on:' + eval('2+2'));
      }
      else if (value == 'C') {
        this.answer = '';
        this.result = '';
      }
      else {
        this.result = this.result.concat(value);

      }
    } catch (e) {
      this.result = 'ERROR';
      this.answer = '';
    }

  }

}

