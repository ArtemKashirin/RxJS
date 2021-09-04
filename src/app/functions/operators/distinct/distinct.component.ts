import {Component, OnInit} from '@angular/core';
import {from} from "rxjs";
import {distinct} from "rxjs/operators";

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
  public distinctLink: string = 'https://rxjs.dev/api/operators/distinct';
  public distinct: string = 'distinct<T, K>(keySelector?: (value: T) => K, flushes?: Observable<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  distinc() {
    from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])
      .pipe(distinct())
      .subscribe(value => console.log('distinct:', value))

  }
}
