import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {sampleTime} from "rxjs/operators";

@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styleUrls: ['./sample-time.component.scss']
})
export class SampleTimeComponent implements OnInit {
  public sampleTimeLink: string = 'https://rxjs.dev/api/operators/sampleTime';
  public sampleTime: string = 'sampleTime<T>(period: number, scheduler: SchedulerLike = asyncScheduler): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  sampleTim() {
    interval(500)
      .pipe(sampleTime(5000))
      .subscribe(value => console.log('sampleTime:', value))

  }
}
