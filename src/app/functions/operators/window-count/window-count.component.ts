import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {windowCount} from "rxjs/operators";

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.html',
  styleUrls: ['./window-count.component.scss']
})
export class WindowCountComponent implements OnInit {
  public windowCountLink: string = 'https://rxjs.dev/api/operators/windowCount';
  public windowCount: string = 'windowCount<T>(windowSize: number, startWindowEvery: number = 0): OperatorFunction<T, Observable<T>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  windowCoun() {
    interval(1000)
      .pipe(windowCount(5))
      .subscribe(value => console.log(value.subscribe(value1 => console.log('windowCount:', value1))))
  }
}
