import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { Pokemon } from 'pokenode-ts';
import { PokeDataService } from 'src/app/services/poke-data.service';
import { QuizServiceService, generation } from 'src/app/services/quiz-service.service';
import { Router } from '@angular/router';
import { pokemonShaped } from 'src/assets/pokemonData/shapedata'

interface ResponseItem {
  name:string,
  url:string
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [PokeDataService]
})
export class QuizComponent implements OnInit, AfterViewInit {
  id:number = 1;
  smashed:number = 0;
  passed:number = 0;
 

  currentPokemon!: pokemonShaped;
  currentGen!: generation;
  pokemonArr:ResponseItem[] = [];
  loaded = false;

  name:string = '';
  path:string = '';//"smash-or-pass\\src\\assets\\pokemonImages\\Bulbasaur.png";
  shape:string = '';

  genset: generation[] = this.quiz.getGenSet();

  constructor(
    private service: PokeDataService, 
    private quiz:QuizServiceService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.currentGen = this.genset.shift() || {'gen': 1, 'picked': true, 'start': 1, 'end': 151};
    this.id = this.currentGen.start;
    this.updatePokemon(this.id);
    this.loaded = true;
    console.log(this.pokemonArr);
    console.log(this.genset);
  }

  ngAfterViewInit(){
  }
  
  resolvePass() {
    this.passed += 1;
    this.goNext();
  }

  resolveSmash() {
    this.smashed += 1;
    this.quiz.addSmash({
      name: this.currentPokemon.name,
      img_path: this.path,
      shape: this.currentPokemon.shape
    });
    this.goNext();
  }

  resolveNewGen() {
    console.log(this.genset);
    if (this.genset.length){
      this.currentGen = this.genset.shift() || {gen:0, picked: false, start: 1, end: 898};
      this.id = this.currentGen.start;
    }
    else {
       this.router.navigate(['/quiz/results']);
    }
  }

  goNext() {
    if (this.id == this.currentGen.end) {
      this.resolveNewGen();
    }
    else {
      this.id += 1;
    }
    this.updatePokemon(this.id);
    
  }

  updatePokemon(id:number) {
    this.currentPokemon = this.service.getPokemonById(id);
    //this.name = this.currentPokemon.name;
    this.path = `../../assets/pokemonImages/${this.currentPokemon.name}.png`;
  }

  getPath() {
    //return this.path;
    return `smash-or-pass\\src\\assets\\pokemonImages\\${this.name}.png`;
  }

  getName() {
    return this.name;
  }

  skipGen() {
    this.id = this.currentGen.end;
    this.goNext()
  }

  // getPokemonArr() {
  //   this.service.getNextBatch().subscribe(
  //     (result:any) => {
  //       this.service.next = result.next;
  //       this.pokemonArr = result.results;
  //     })
  //   };
}
