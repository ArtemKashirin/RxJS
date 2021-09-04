import {Component, OnInit} from '@angular/core';
import {interval, of} from "rxjs";
import {exhaustMap, take} from "rxjs/operators";

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {
  public exhaustMapLink: string = 'https://rxjs.dev/api/operators/exhaustMap';
  public exhaustMap: string = 'exhaustMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  exhaustMa() {
    interval(1000)
      .pipe(
        take(5),
        exhaustMap(i => of(i + 10)))
      .subscribe(value => console.log('exhaustMap:', value))
  }
}
