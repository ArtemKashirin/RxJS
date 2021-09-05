import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {reduce} from "rxjs/operators";

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit {
  public reduceLink: string = 'https://rxjs.dev/api/operators/reduce';
  public reduce: string = 'reduce<V, A>(accumulator: (acc: V | A, value: V, index: number) => A, seed?: any): OperatorFunction<V, V | A>';

  constructor() {
  }

  ngOnInit(): void {
  }

  reduc() {
    of(1, 2, 3, 4, 5)
      .pipe(reduce((acc, value) => acc + value))
      .subscribe(value => console.log('reduce:', value))
  }
}
