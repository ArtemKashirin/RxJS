import { Component, OnInit } from '@angular/core';
import {from} from "rxjs";
import {last} from "rxjs/operators";

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {
  public lastLink: string = 'https://rxjs.dev/api/operators/last';
  public last: string = 'last<T, D>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>';

  constructor() { }

  ngOnInit(): void {
  }

  las() {
    from([1, 1, 4, 5, 3, 7, 8])
      .pipe(last(value => value > 3))
      .subscribe(value => console.log('last:', value))
  }
}
