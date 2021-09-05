import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {min} from "rxjs/operators";

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.scss']
})
export class MinComponent implements OnInit {
  public minLink: string = 'https://rxjs.dev/api/operators/min';
  public min: string = 'min<T>(comparer?: (x: T, y: T) => number): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  mi() {
    of(1, 6, 9, 4)
      .pipe(min())
      .subscribe(value => console.log('min:', value))
  }
}
