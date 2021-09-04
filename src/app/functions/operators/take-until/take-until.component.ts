import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from "rxjs";
import {take, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {
  public takeUntilLink: string = 'https://rxjs.dev/api/operators/takeUntil';
  public takeUntil: string = 'takeUntil<T>(notifier: ObservableInput<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {

  }

  takeUnti() {
    interval(1000).pipe(takeUntil(interval(5000)))
      .subscribe(value => console.log('takeUntil:', value))

  }
}
