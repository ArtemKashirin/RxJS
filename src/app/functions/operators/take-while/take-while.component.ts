import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {
  public takeWhileLink: string = 'https://rxjs.dev/api/operators/takeWhile';
  public takeWhile: string = 'takeWhile<T>(predicate: (value: T, index: number) => boolean, inclusive: boolean = false): MonoTypeOperatorFunction<T>';

  constructor() { }

  ngOnInit(): void {
  }

  takeWhil() {
    interval(1000)
      .pipe(takeWhile(value => value < 4))
      .subscribe(value => console.log('takeWhile:', value))
  }
}
