import { Component, OnInit } from '@angular/core';
import { QuizServiceService, smashPoke } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {

  smashed: smashPoke[] = this.quiz.getSmashed();

  constructor(private quiz: QuizServiceService) { }

  ngOnInit(): void {
  }
  getFuckNumber(){
    return this.smashed.length;
  }

  getPath(str:string) {
    console.log(`smash-or-pass\\src\\assets\\pokemonImages\\${str}.png`);
    return `smash-or-pass\\src\\assets\\pokemonImages\\${str}.png`;
  }
}
