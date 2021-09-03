import {Component, OnInit} from '@angular/core';
import {combineLatest, interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  public combineLatestLink: string = 'https://rxjs.dev/api/index/function/combineLatest';
  public combineLatest: string = 'combineLatest<O extends ObservableInput<any>, R>(...args: any[]): Observable<R> | Observable<ObservedValueOf<O>[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  combineLates() {
    const firstObs: Observable<number> = interval(2000).pipe(take(4));
    const secondObs: Observable<number> = interval(1000).pipe(take(2));
    combineLatest([firstObs, secondObs]).subscribe(value => console.log('combineLatest:', value));

  }
}
