import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { QuizMenuComponent } from './quiz-menu/quiz-menu.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';



@NgModule({
  declarations: [
    QuizComponent,
    QuizMenuComponent,
    QuizResultsComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    QuizComponent,
    QuizMenuComponent,
    QuizResultsComponent
  ]
})
export class QuizModule { }
