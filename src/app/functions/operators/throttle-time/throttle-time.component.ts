import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent implements OnInit {
  public throttleTimeLink: string = 'https://rxjs.dev/api/operators/throttleTime';
  public throttleTime: string = 'throttleTime<T>(duration: number): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  throttleTim() {
    interval(1000)
      .pipe(throttleTime(5000))
      .subscribe(value => console.log('throttleTime:', value))

  }
}
