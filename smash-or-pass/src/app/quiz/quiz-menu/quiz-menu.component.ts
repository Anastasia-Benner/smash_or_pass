import { Component,  OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import { generation } from 'src/app/services/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-menu',
  templateUrl: './quiz-menu.component.html',
  styleUrls: ['./quiz-menu.component.css']
})

export class QuizMenuComponent implements OnInit {
  generations:generation[] = this.quiz.getGenSet();

  constructor(private quiz: QuizServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.quiz.resetGenset();
    this.generations = this.quiz.getGenSet();
    this.quiz.clearSmashed();
  }

  handleSubmit() {
    this.quiz.setGenSet(this.generations.filter(x => x.picked));
    this.router.navigate(['/quiz/quiz']);
  }

}
