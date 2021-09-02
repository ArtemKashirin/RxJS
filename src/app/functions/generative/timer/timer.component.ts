import { Component, OnInit } from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public timerLink: string = 'https://rxjs.dev/api/index/function/timer';
  public timer: string = 'timer(dueTime: number | Date = 0, intervalOrScheduler?: number | SchedulerLike, scheduler: SchedulerLike = asyncScheduler): Observable<number>';

  constructor() { }

  ngOnInit(): void {
  }

  time() {
    timer(1000).subscribe(value => console.log('timer:', value))
  }
}
