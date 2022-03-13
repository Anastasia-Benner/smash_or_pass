import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { QuizRoutingModule } from './quiz/quiz-routing.module';

const appRoutes: Routes = [
  {path: 'smashorpass', component: QuizRoutingModule},
  
  {path: '', component: QuizRoutingModule, pathMatch: 'full'},
  {path: '**', component: QuizRoutingModule} //replace with not found page
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // for debugging 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
