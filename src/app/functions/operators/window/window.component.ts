import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {window} from "rxjs/operators";

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  public windowLink: string = 'https://rxjs.dev/api/operators/window';
  public window: string = 'window<T>(windowBoundaries: Observable<any>): OperatorFunction<T, Observable<T>>';

  constructor() { }

  ngOnInit(): void {
  }

  windo() {
    interval(1000)
      .pipe(window(interval(5000)))
      .subscribe(value => console.log(value.subscribe(value1 => console.log('window:', value1))))
  }
}
