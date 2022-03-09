import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokeDataService } from '../poke-data.service';
import { generation } from '../quiz-menu/quiz-menu.component';

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

  currentPokemon!: Pokemon;
  currentGen!: generation;
  pokemonArr:ResponseItem[] = [];
  loaded = false;
  name:string = '';
  path:string = '';//"smash-or-pass\\src\\assets\\pokemonImages\\Bulbasaur.png";
  
  @Input() genset: generation[] = [];

  constructor(private service: PokeDataService) { }
  
  ngOnInit(): void {
    this.currentGen = this.genset.shift() || {'gen': 1, 'picked': true, 'start': 1, 'end': 151};
    this.id = this.currentGen.start;
    this.service.getPokemonById(this.id).subscribe(
      (result:any) => {
        this.currentPokemon = result;
        this.name = result.name;
        this.path = `../../assets/pokemonImages/${this.name}.png`;
        //this.path = result.sprites.other['official-artwork'].front_default ||'';
      }, (error) => { console.log(error)}
    )
    // this.service.getNextBatch().subscribe(
    //   (result:any) => {
    //     this.service.next = result.next;
    //     this.pokemonArr = result.results;
    //     console.log(result);
    //   }
    // )
    this.loaded = true;
    console.log(this.pokemonArr);
    console.log(this.genset);
  }

  ngAfterViewInit(){
    console.log(this.service.getNextBatch());
  }
  
  resolvePass() {
    this.passed += 1;
    this.goNext();
  }

  resolveSmash() {
    this.smashed += 1;
    this.goNext();
  }

  resolveNewGen() {
    if (this.genset){
      this.currentGen = this.genset.shift() || {gen:0, picked: false, start: 1, end: 898};
      this.id = this.currentGen.start;
    }
    else {
      // logic to terminate quiz 
    }
  }

  goNext() {
    if (this.id == this.currentGen.end) {
      this.resolveNewGen();
    }
    else {
      this.id += 1;
    }
    this.service.getPokemonById(this.id).subscribe(
      (result:any) => {
        this.currentPokemon = result;
        this.name = result.name;
        this.path = `../../assets/pokemonImages/${this.name}.png`;
        //this.path = result.sprites.other['official-artwork'].front_default ||'';
      }, (error) => { console.log(error)}
    )
    
  }

  getPath() {
    //return this.path;
    return `smash-or-pass\\src\\assets\\pokemonImages\\${this.name}.png`;
  }

  getName() {
    return this.name;
  }

  getPokemonArr() {
    this.service.getNextBatch().subscribe(
      (result:any) => {
        this.service.next = result.next;
        this.pokemonArr = result.results;
      })
    };
}
