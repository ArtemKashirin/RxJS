import {Component, OnInit} from '@angular/core';
import {interval, of} from "rxjs";
import {switchMap, take} from "rxjs/operators";

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  public switchMapLink: string = 'https://rxjs.dev/api/operators/switchMap';
  public switchMap: string = 'switchMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  switchMa() {
    interval(1000)
      .pipe(
        take(5),
        switchMap(i => of(i + 10)))
      .subscribe(value => console.log('exhaustMap:', value))
  }
}
