import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {count} from "rxjs/operators";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  public countLink: string = 'https://rxjs.dev/api/operators/count';
  public count: string = 'count<T>(predicate?: (value: T, index: number) => boolean): OperatorFunction<T, number>';

  constructor() {
  }

  ngOnInit(): void {
  }

  coun() {
    of(1, 2, 3, 4, 5, 6, 7)
      .pipe(count())
      .subscribe(value => console.log('count:', value))
  }
}
