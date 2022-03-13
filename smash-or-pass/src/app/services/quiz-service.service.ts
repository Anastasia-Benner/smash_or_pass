import { Injectable } from '@angular/core';

export interface generation {
  'gen': number,
  'picked': boolean,
  'start': number,
  'end': number
}

export interface smashPoke {
  name: string,
  img_path: string
}

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  private genSet: generation[] = [
      {gen: 1, picked: false, start: 1, end : 151},
      {gen: 2, picked: false, start: 152, end: 251},
      {gen: 3, picked: false, start: 252, end: 386},
      {gen: 4, picked: false, start: 387, end: 494},
      {gen: 5, picked: false, start: 495, end: 649},
      {gen: 6, picked: false, start: 650, end: 721},
      {gen: 7, picked: false, start: 722, end: 809},
      {gen: 8, picked: false, start: 810, end: 898}
    ]
  
  private smashSet: smashPoke[] = [];
  
  constructor() { }
  
  setGenSet(new_set:generation[]) {
    this.genSet = new_set;
  }

  getGenSet() {
    return this.genSet;
  }

  addSmash(poke:smashPoke) {
    this.smashSet.push(poke);
  }

  getSmashed() {
    return this.smashSet;
  }
}
