import { ActiveDescendantKeyManager } from "@angular/cdk/a11y";

export class Question {
    ask: string;
    answer: any;


    constructor(message: string) {
        this.ask = message;
        this.answer = 'Not answered yet';
    }

    setAnswer(value: any) {
        if (value == 1) { this.answer = 'Tosi huono' }
        else if (value == 2) { this.answer = 'Kehno'; }
        else if (value == 3) { this.answer = 'ok'; }
        else if (value == 4) { this.answer = 'Hyvä'; }
        else if (value == 5) { this.answer = 'Tosi hyvä'; }

    }

}

