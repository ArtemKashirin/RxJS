import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {
  public timeoutLink: string = 'https://rxjs.dev/api/operators/timeout';
  public timeout: string = 'timeout<T, O extends ObservableInput<any>, M>(config: number | Date | TimeoutConfig<T, O, M>, schedulerArg?: SchedulerLike): OperatorFunction<T, T | ObservedValueOf<O>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  timeou() {
    interval(5000)
      .pipe(timeout(1500))
      .subscribe(null, error => console.log('timeout:', error))

  }
}
