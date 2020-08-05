import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http:HttpClient) { }

  getJoke() {
    return this.http.get('http://www.official-joke-api.appspot.com/random_joke')
  }
}
