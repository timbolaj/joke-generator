import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor() { }

  count:number = 0;

  addCount():void {
    this.count += 1;
  }
}
