import {Component, OnInit} from '@angular/core';
import {interval, of, timer} from "rxjs";
import {delay, throttle} from "rxjs/operators";

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent implements OnInit {
  public throttleLink: string = 'https://rxjs.dev/api/operators/throttle';
  public throttle: string = 'throttle<T>(durationSelector: (value: T) => ObservableInput<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  throttl() {
    interval(1000)
      .pipe(throttle(() => interval(5000)))
      .subscribe(value => console.log('throttle:', value))
  }
}
