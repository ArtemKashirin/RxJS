import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {windowWhen} from "rxjs/operators";

@Component({
  selector: 'app-window-when',
  templateUrl: './window-when.component.html',
  styleUrls: ['./window-when.component.scss']
})
export class WindowWhenComponent implements OnInit {
  public windowWhenLink: string = 'https://rxjs.dev/api/operators/windowWhen';
  public windowWhen: string = 'windowWhen<T>(closingSelector: () => ObservableInput<any>): OperatorFunction<T, Observable<T>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  windowWhe() {
    interval(1000)
      .pipe(windowWhen(() => interval(5000)))
      .subscribe(value => console.log(value.subscribe(value1 => console.log('windowWhen:', value1))))
  }
}
