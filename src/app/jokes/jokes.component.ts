import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private jokeService: JokeService
    ) { }

  prompt:String;
  punchLine:String;

  ngOnInit(): void {

  }

  addCount(): void {
    this.jokeService.addCount();
  }

  renderJoke(): void {
    this.jokeService.getJoke()
    .subscribe(res => {
      this.prompt = res.setup;
      this.punchLine = res.punchline;
    })
  }

}
