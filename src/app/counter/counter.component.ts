import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {

  }

  times:string

  getCount(): number {
    this.jokeService.count === 1 ? this.times = 'time' : this.times = 'times';
    return this.jokeService.count;
  }

}
