import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  public intervalLink: string = 'https://rxjs.dev/api/index/function/interval';
  public interval: string = 'interval(period: number = 0, scheduler: SchedulerLike = asyncScheduler): Observable<number>';

  constructor() {
  }

  ngOnInit(): void {
  }

  interva() {
    interval(1000).subscribe(value => console.log('interval:', value))
  }
}
