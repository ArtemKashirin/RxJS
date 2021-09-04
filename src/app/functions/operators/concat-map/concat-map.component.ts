import {Component, OnInit} from '@angular/core';
import {interval, of} from "rxjs";
import {concatMap, take} from "rxjs/operators";

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {
  public concatMapLink: string = 'https://rxjs.dev/api/operators/concatMap';
  public concatMap: string = 'concatMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  concatMa() {
    interval(1000)
      .pipe(
        take(5),
        concatMap(i => of(i + 10)))
      .subscribe(value => console.log('concatMap:', value))

  }
}
