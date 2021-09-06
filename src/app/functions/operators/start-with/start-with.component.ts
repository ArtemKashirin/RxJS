import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {
  public startWithLink: string = 'https://rxjs.dev/api/operators/startWith';
  public startWith: string = 'startWith<T, D>(...values: D[]): OperatorFunction<T, T | D>';

  constructor() {
  }

  ngOnInit(): void {
  }

  startWit() {
    of(1, 2, 3, 4, '5')
      .pipe(startWith(10))
      .subscribe(value => console.log('startWith:', value))
  }
}
