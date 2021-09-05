import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {findIndex} from "rxjs/operators";

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss']
})
export class FindIndexComponent implements OnInit {
  public findIndexLink: string = 'https://rxjs.dev/api/operators/findIndex';
  public findIndex: string = 'findIndex<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): OperatorFunction<T, number>';

  constructor() { }

  ngOnInit(): void {
  }

  findInde() {
    of(1, 2, 3, 4)
      .pipe(findIndex(value => value < 5))
      .subscribe(value => console.log('findIndex:', value))
  }
}
