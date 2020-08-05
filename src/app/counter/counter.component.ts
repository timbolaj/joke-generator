import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {

  constructor() { }

  jokeCount:number = 0;

  ngOnInit(): void {

  }

  updateCount(): void {
    this.jokeCount += 1;
  }

}
