import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {expand, take} from "rxjs/operators";

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent implements OnInit {
  public expandLink: string = 'https://rxjs.dev/api/operators/expand';
  public expand: string = 'expand<T, O extends ObservableInput<unknown>>(project: (value: T, index: number) => O, concurrent: number = Infinity): OperatorFunction<T, ObservedValueOf<O>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  expan() {
    of(2)
      .pipe(expand(v => of(v * 2)), take(4))
      .subscribe(value => console.log('expand:', value))

  }
}
