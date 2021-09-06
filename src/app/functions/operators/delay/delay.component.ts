import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  public delayLink: string = 'https://rxjs.dev/api/operators/delay';
  public delay: string = 'delay<T>(due: number | Date, scheduler: SchedulerLike = asyncScheduler): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  dela() {
    interval(1000)
      .pipe(delay(5000))
      .subscribe(value => console.log('delay:', value))

  }
}
