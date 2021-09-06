import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {take, toArray} from "rxjs/operators";

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  public toArrayLink: string = 'https://rxjs.dev/api/operators/toArray';
  public toArray: string = 'toArray<T>(): OperatorFunction<T, T[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  toArra() {
    interval(500)
      .pipe(
        take(5),
        toArray())
      .subscribe(value => console.log('toArray:', value))

  }
}
