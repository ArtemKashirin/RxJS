import { Component, OnInit } from '@angular/core';
import {from} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {
  public distinctUntilChangedLink: string = 'https://rxjs.dev/api/operators/distinctUntilChanged';
  public distinctUntilChanged: string = 'distinctUntilChanged<T, K>(comparator?: (previous: K, current: K) => boolean, keySelector: (value: T) => K = identity as (value: T) => K): MonoTypeOperatorFunction<T>';

  constructor() { }

  ngOnInit(): void {
  }

  distinctUntilChange() {
    from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])
      .pipe(distinctUntilChanged())
      .subscribe(value => console.log('distinctUntilChanged:', value))
  }
}
