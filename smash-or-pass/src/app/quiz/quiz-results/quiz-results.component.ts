import { Component, OnInit } from '@angular/core';
import { QuizServiceService, smashPoke } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {

  smashed: smashPoke[] = this.quiz.getSmashed();
  shape:string = '';

  constructor(private quiz: QuizServiceService) { }

  ngOnInit(): void {
    this.shape = this.getShapeMode();
  }

  getShapeMode(): string {
    if(!this.smashed.length) return "no";

    let array = this.smashed.map( x=> x.shape);
    let modeMap:any = {};
    var maxEl = array[0], maxCount = 1;

    for(var i = 0; i < array.length; i++) {
      let el:string = array[i];
      if(modeMap[el] == null) {
        modeMap[el] = 1;
      }
      else {
        modeMap[el]++;
        }  
      if(modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }

  getFuckNumber(){
    console.log(this.smashed);
    return this.smashed.length;
  }

  getPath(str:string) {
    console.log(`smash-or-pass\\src\\assets\\pokemonImages\\${str}.png`);
    return `smash-or-pass\\src\\assets\\pokemonImages\\${str}.png`;
  }
}
