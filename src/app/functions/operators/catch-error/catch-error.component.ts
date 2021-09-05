import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  public catchErrorLink: string = 'https://rxjs.dev/api/operators/catchError';
  public catchError: string = 'catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  catchErro() {
    interval(100)
      .pipe(tap(v => {
        if(v == 5) throw new Error()
      }), catchError(err => err))
      .subscribe(value => console.log('catchError:', value))

  }
}
