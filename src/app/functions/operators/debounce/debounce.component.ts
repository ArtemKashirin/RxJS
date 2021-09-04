import {Component, OnInit} from '@angular/core';
import {fromEvent, timer} from 'rxjs';
import {interval, of} from "rxjs";
import {debounce, delay} from "rxjs/operators";

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {
  public debounceLink: string = 'https://rxjs.dev/api/operators/debounce';
  public debounce: string = 'debounce<T>(durationSelector: (value: T) => ObservableInput<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  debounc() {
    of(1, 2, 3).pipe(
      delay(5000),
      debounce(() => interval(500)))
      .subscribe(value => console.log('debounce:', value))
  }
}
