import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { PokeDataService } from './poke-data.service';
import { HttpClientModule } from '@angular/common/http';
//import { PokemonClient } from 'pokenode-ts';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
