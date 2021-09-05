import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {timeInterval} from "rxjs/operators";

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.scss']
})
export class TimeIntervalComponent implements OnInit {
  public timeIntervalLink: string = 'https://rxjs.dev/api/operators/timeInterval';
  public timeInterval: string = 'timeInterval<T>(scheduler: SchedulerLike = async): OperatorFunction<T, TimeInterval<T>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  timeInterva() {
    interval(1000)
      .pipe(timeInterval())
      .subscribe(value => console.log('timeInterval:', value))

  }
}
