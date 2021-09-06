import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {windowTime} from "rxjs/operators";

@Component({
  selector: 'app-window-time',
  templateUrl: './window-time.component.html',
  styleUrls: ['./window-time.component.scss']
})
export class WindowTimeComponent implements OnInit {
  public windowTimeLink: string = 'https://rxjs.dev/api/operators/windowTime';
  public windowTime: string = 'windowTime<T>(windowTimeSpan: number, ...otherArgs: any[]): OperatorFunction<T, Observable<T>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  windowTim() {
    interval(1000)
      .pipe(windowTime(5000))
      .subscribe(value => console.log(value.subscribe(value1 => console.log('windowTime:', value1))))
  }
}
