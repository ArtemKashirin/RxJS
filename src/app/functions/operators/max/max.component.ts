import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {max} from "rxjs/operators";

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.scss']
})
export class MaxComponent implements OnInit {
  public maxLink: string = 'https://rxjs.dev/api/operators/max';
  public max: string = 'max<T>(comparer?: (x: T, y: T) => number): MonoTypeOperatorFunction<T>';

  constructor() { }

  ngOnInit(): void {
  }

  ma() {
    of(1,4,8,44,7)
      .pipe(max())
      .subscribe(value => console.log('max:', value))

  }
}
