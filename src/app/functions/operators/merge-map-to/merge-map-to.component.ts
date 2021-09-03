import {Component, OnInit} from '@angular/core';
import {fromEvent, of} from "rxjs";
import {mergeMapTo} from "rxjs/operators";

@Component({
  selector: 'app-merge-map-to',
  templateUrl: './merge-map-to.component.html',
  styleUrls: ['./merge-map-to.component.scss']
})
export class MergeMapToComponent implements OnInit {
  public mergeMapToLink: string = 'https://rxjs.dev/api/operators/mergeMapTo';
  public mergeMapTo: string = 'mergeMapTo<T, R, O extends ObservableInput<unknown>>(innerObservable: O, resultSelector?: number | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), concurrent: number = Infinity): OperatorFunction<T, ObservedValueOf<O> | R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  mergeMapT() {
    fromEvent(document, 'click')
      .pipe(mergeMapTo(of(1, 2, 3))).subscribe(value => console.log('mergeMapTo:', value))

  }
}
