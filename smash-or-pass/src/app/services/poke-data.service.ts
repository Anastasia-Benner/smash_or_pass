import { Injectable } from '@angular/core';
//import { PokemonClient } from 'pokenode-ts';
import { HttpClient } from '@angular/common/http';
import { POKE_SHAPES } from 'src/assets/pokemonData/shapedata';

@Injectable({
  providedIn: 'root'
})

export class PokeDataService {
  
  private base_url:string = "https://pokeapi.co/api/v2/";
  next:string='';

  constructor(private http: HttpClient ) { }
  
  getPokemonById(i:number){
    //return this.http.get(`${this.base_url}pokemon/${i}`);
    return POKE_SHAPES[i-1];
  }

  // getNextBatch() { // for some reason pokemonArr isn't getting updated values
  //   let url = this.next ? this.next : `${this.base_url}pokemon/?limit=100`;
  //   return this.http.get(url);
  // }
}
