import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {retry, tap} from "rxjs/operators";

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  public retryLink: string = 'https://rxjs.dev/api/operators/retry';
  public retry: string = 'retry<T>(configOrCount: number | RetryConfig = Infinity): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  retr() {
    interval(100)
      .pipe(tap(v => {
        if(v == 5) throw new Error()
      }), retry(2))
      .subscribe(value => console.log('retry:', value))
  }
}
