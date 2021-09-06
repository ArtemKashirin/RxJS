import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {isEmpty} from "rxjs/operators";

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss']
})
export class IsEmptyComponent implements OnInit {
  public isEmptyLink: string = 'https://rxjs.dev/api/operators/isEmpty';
  public isEmpty: string = 'isEmpty<T>(): OperatorFunction<T, boolean>';

  constructor() {
  }

  ngOnInit(): void {
  }

  isEmpt() {
    of()
      .pipe(isEmpty())
      .subscribe(value => console.log('isEmpty:', value))

  }
}
