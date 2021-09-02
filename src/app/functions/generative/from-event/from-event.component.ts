import {Component, OnInit} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  public fromEventLink: string = 'https://rxjs.dev/api/index/function/fromEvent';
  public fromEvent: string = 'fromEvent<T>(target: any, eventName: string, options?: EventListenerOptions | ((...args: any[]) => T), resultSelector?: (...args: any[]) => T): Observable<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  fromEven() {
    fromEvent(document, 'click').subscribe(value => {
      (value.target as HTMLElement).style.backgroundColor = 'blue';
      console.log('fromEvent:', value)})
  }
}
