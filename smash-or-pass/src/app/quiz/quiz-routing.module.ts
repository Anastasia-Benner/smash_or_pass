import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizMenuComponent } from './quiz-menu/quiz-menu.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

const routes: Routes = [
  {path: 'quiz/menu', component: QuizMenuComponent},
  {path: 'quiz/quiz', component: QuizComponent},
  {path: 'quiz/results', component: QuizResultsComponent},

  {path: '', component: QuizMenuComponent, pathMatch: 'full'},
  {path: '**', component: QuizMenuComponent} //replace with not found page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
