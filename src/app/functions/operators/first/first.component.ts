import { Component, OnInit } from '@angular/core';
import {from} from "rxjs";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public firstLink: string = 'https://rxjs.dev/api/operators/first';
  public first: string = 'first<T, D>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>';

  constructor() { }

  ngOnInit(): void {
  }

  firs() {
    from([1, 1, 4, 5, 3, 7, 8])
      .pipe(first(value => value > 3))
      .subscribe(value => console.log('first:', value))
  }
}
