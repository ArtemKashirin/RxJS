import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {every} from "rxjs/operators";

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
  public everyLink: string = 'https://rxjs.dev/api/operators/every';
  public every: string = 'every<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): OperatorFunction<T, boolean>';

  constructor() {
  }

  ngOnInit(): void {
  }

  ever() {
    of(1, 2, 3, 4)
      .pipe(every(value => value < 5))
      .subscribe(value => console.log('every:', value))

  }
}
