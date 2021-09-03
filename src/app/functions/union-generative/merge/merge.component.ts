import {Component, OnInit} from '@angular/core';
import { merge } from 'rxjs';
import {interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  public mergeLink: string = 'https://rxjs.dev/api/index/function/merge';
  public merge: string = 'merge(...args: (number | SchedulerLike | Observable<unknown> | InteropObservable<unknown> | AsyncIterable<unknown> | PromiseLike<unknown> | ArrayLike<...> | Iterable<...> | ReadableStreamLike<...>)[]): Observable<unknown>';

  constructor() {
  }

  ngOnInit(): void {
  }

  merg() {
    const firstObs: Observable<number> = interval(2000).pipe(take(4));
    const secondObs: Observable<number> = interval(1000).pipe(take(2));
    merge(firstObs, secondObs).subscribe(value => console.log('merge:', value));
  }
}
