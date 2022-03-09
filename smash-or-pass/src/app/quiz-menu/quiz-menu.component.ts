import { Component,  OnInit } from '@angular/core';

export interface generation {
  'gen': number,
  'picked': boolean,
  'start': number,
  'end': number
}

@Component({
  selector: 'app-quiz-menu',
  templateUrl: './quiz-menu.component.html',
  styleUrls: ['./quiz-menu.component.css']
})

export class QuizMenuComponent implements OnInit {
  submitted:boolean = false;
  generations:generation[] = [
    {'gen': 1, 'picked': false, 'start': 1, 'end': 151},
    {'gen': 2, 'picked': false, 'start': 152, 'end': 251},
    {'gen': 3, 'picked': false, 'start': 252, 'end': 386},
    {'gen': 4, 'picked': false, 'start': 387, 'end': 494},
    {'gen': 5, 'picked': false, 'start': 495, 'end': 649},
    {'gen': 6, 'picked': false, 'start': 650, 'end': 721},
    {'gen': 7, 'picked': false, 'start': 722, 'end': 809},
    {'gen': 8, 'picked': false, 'start': 810, 'end': 898}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.generations = this.generations.filter(x => x.picked);
    this.submitted = true;
  }

}
