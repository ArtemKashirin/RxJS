import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {find} from "rxjs/operators";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  public findLink: string = 'https://rxjs.dev/api/operators/find';
  public find: string = 'find<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): OperatorFunction<T, T | undefined>';

  constructor() { }

  ngOnInit(): void {
  }

  fin() {
    of(1, 2, 3, 4)
      .pipe(find(value => value < 5))
      .subscribe(value => console.log('find:', value))
  }
}
