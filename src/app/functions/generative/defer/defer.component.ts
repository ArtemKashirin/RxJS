import {Component, OnInit} from '@angular/core';
import {defer, from, interval, Observable} from "rxjs";

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {
  public deferLink: string = 'https://rxjs.dev/api/index/function/defer';
  public defer: string = 'defer<R extends ObservableInput<any>>(observableFactory: () => R): Observable<ObservedValueOf<R>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  defe() {
    const isTrue: boolean = true;
    const o: Observable<string> = from(['qw', 'er', 'ty']);
    const i: Observable<number> = interval(1000);

    defer<Observable<string | number>>(() => {
      if(isTrue) return o
      else return i
    }).subscribe(value => console.log('defer:', value))
  }
}
