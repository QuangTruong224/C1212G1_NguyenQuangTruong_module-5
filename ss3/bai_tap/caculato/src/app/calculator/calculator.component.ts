import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  first = 0;
  second = 0;
  operator = '';
  result = '';

  addition() {
    this.operator = '+';
  }

  subtraction() {
    this.operator = '-';
  }

  multiplication() {
    this.operator = '*';
  }

  division() {
    this.operator = '/';
  }

  calcutator() {
    switch (this.operator) {

      case '+':
        this.result = String(this.first + this.second);
        break;
      case '-':
        this.result = String(this.first - this.second);
        break;
      case '*':
        this.result = String(this.first * this.second);
        break;
      case '/':
        // tslint:disable-next-line:triple-equals
        if (this.second == 0) {
          this.result = 'Không dc là số 0';
          break;
        } else {
          this.result = String(this.first / this.second);
          break;
        }
    }
    return this.result;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
