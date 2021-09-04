import {Component, OnInit} from '@angular/core';
import {interval, of} from "rxjs";
import {delayWhen} from "rxjs/operators";

@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html',
  styleUrls: ['./delay-when.component.scss']
})
export class DelayWhenComponent implements OnInit {
  public delayWhenLink: string = 'https://rxjs.dev/api/operators/delayWhen';
  public delayWhen: string = 'delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<any>, subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  delayWhe() {
    interval(1000)
    of(1, 2, 3, 4, 5)
      .pipe(delayWhen(() => interval(5000)))
      .subscribe(value => console.log('delayWhen:', value))

  }
}
