import { Injectable } from '@angular/core';
//import { PokemonClient } from 'pokenode-ts';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  private base_url:string = "https://pokeapi.co/api/v2/";


  constructor(private http: HttpClient ) { }
  
  getPokemonById(i:number){
    return this.http.get(`${this.base_url}pokemon/${i}`);
  }
}
