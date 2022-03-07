import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokeDataService } from '../poke-data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [PokeDataService]
})
export class QuizComponent implements OnInit {
  id:number = 1;
  smashed:number = 0;
  passed:number = 0;

  currentPokemon!: Pokemon;
  loaded = false;
  name:string = '';
  path:string = '';//"smash-or-pass\\src\\assets\\pokemonImages\\Bulbasaur.png";

  constructor(private service: PokeDataService) { }
  
  ngOnInit(): void {
    console.log("inits");
    this.service.getPokemonById(1).subscribe(
      (result:any) => {
        this.currentPokemon = result;
        this.name = result.name;
        this.path = result.sprites.other['official-artwork'].front_default ||'';
      }, (error) => { console.log(error)}
    )
    
    this.loaded = true;
  }
  
  resolvePass() {
    this.passed += 1;
    this.goNext();
  }

  resolveSmash() {
    this.smashed += 1;
    this.goNext();
  }

  goNext() {
    this.id += 1;
    this.service.getPokemonById(this.id).subscribe(
      (result:any) => {
        this.currentPokemon = result;
        this.name = result.name;
        this.path = result.sprites.other['official-artwork'].front_default ||'';
      }, (error) => { console.log(error)}
    )
  }

  getPath() {
    return this.path;
  }

  getName() {
    return this.name;
  }
}
