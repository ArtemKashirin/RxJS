import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, of} from "rxjs";
import {concatMapTo} from "rxjs/operators";

@Component({
  selector: 'app-concat-map-to',
  templateUrl: './concat-map-to.component.html',
  styleUrls: ['./concat-map-to.component.scss']
})
export class ConcatMapToComponent implements OnInit {
  public concatMapToLink: string = 'https://rxjs.dev/api/operators/concatMapTo';
  public concatMapTo: string = 'concatMapTo<T, R, O extends ObservableInput<unknown>>(innerObservable: O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  concatMapT() {
    fromEvent(document, 'click').pipe(
      concatMapTo(of(1, 2, 3)))
      .subscribe(value => console.log('concatMapTo:', value))
  }
}
