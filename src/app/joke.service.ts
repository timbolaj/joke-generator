import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  count:number = 0;
  jokePrompt:String;
  punchLine:String;

  addCount():void {
    this.count += 1;
  }

  getJoke():any {
    return this.http.get<any>('https://www.official-joke-api.appspot.com/random_joke');
  }
}
