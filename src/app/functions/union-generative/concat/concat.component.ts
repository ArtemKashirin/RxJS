import { Component, OnInit } from '@angular/core';
import {concat, interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  public concatLink: string = 'https://rxjs.dev/api/index/function/concat';
  public concat: string = 'concat(...args: any[]): Observable<unknown>';

  constructor() { }

  ngOnInit(): void {
  }

  conca() {
    const firstObs: Observable<number> = interval(2000).pipe(take(4));
    const secondObs: Observable<number> = interval(1000).pipe(take(2));
    concat(firstObs, secondObs).subscribe(value => console.log('concat:', value));
  }
}
