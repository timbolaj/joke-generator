import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokeService } from '../joke.service';
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(private http: HttpClient, jokeService: JokeService) { }

  jokePrompt:String;
  punchLine:String;

  ngOnInit(): void {
    //this.getJoke();
  }

  getJoke():void {
    this.http.get<any>('http://www.official-joke-api.appspot.com/random_joke').subscribe(res => {
      this.jokePrompt = res.setup;
      this.punchLine = res.punchline;
    })
  }

}
