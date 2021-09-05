import {Component, OnInit} from '@angular/core';
import {interval, of} from "rxjs";
import {retryWhen, tap} from "rxjs/operators";

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {
  public retryWhenLink: string = 'https://rxjs.dev/api/operators/retryWhen';
  public retryWhen: string = 'retryWhen<T>(notifier: (errors: Observable<any>) => Observable<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  retryWhe() {
    interval(100)
      .pipe(
        tap(v => {
          if(v == 5) throw v
        }),
        retryWhen((err) => err
          .pipe(tap(v => console.log(v)))))
      .subscribe(value => console.log('retryWhen:', value))
  }
}
