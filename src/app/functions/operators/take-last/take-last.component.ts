import {Component, OnInit} from '@angular/core';
import {interval, range} from "rxjs";
import {takeLast} from "rxjs/operators";

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent implements OnInit {
  public takeLastLink: string = 'https://rxjs.dev/api/operators/takeLast';
  public takeLast: string = 'takeLast<T>(count: number): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  takeLas() {
    range(0, 10)
      .pipe(takeLast(3))
      .subscribe(value => console.log('takeLast:', value))

  }
}
