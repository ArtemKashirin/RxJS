import { Component, OnInit } from '@angular/core';
import {interval, of} from "rxjs";
import {map, mergeAll, take} from "rxjs/operators";

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss']
})
export class MergeAllComponent implements OnInit {
  public mergeAllLink: string = 'https://rxjs.dev/api/operators/mergeAll';
  public mergeAll: string = 'mergeAll<O extends ObservableInput<any>>(concurrent: number = Infinity): OperatorFunction<O, ObservedValueOf<O>>';

  constructor() { }

  ngOnInit(): void {
  }

  mergeAl() {
    of(1, 2, 3, 4)
      .pipe(
        map(ev => interval(100).pipe(take(4))))
      .pipe(mergeAll())
      .subscribe(value => console.log('mergeAll:', value));
  }
}
