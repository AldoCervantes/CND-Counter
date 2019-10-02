import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'counter',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {

  @Input() counter: Counter;

  increment() {
    this.counter.value += 1;
  }

  decrement() {
    this.counter.value -= 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
