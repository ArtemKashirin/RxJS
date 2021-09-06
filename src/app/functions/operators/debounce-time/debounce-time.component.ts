import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {
  public debounceTimeLink: string = 'https://rxjs.dev/api/operators/debounceTime';
  public debounceTime: string = 'debounceTime<T>(dueTime: number, scheduler: SchedulerLike = asyncScheduler): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {

  }

  debounceTim() {
    fromEvent(document, 'click')
      .pipe(debounceTime(5000))
      .subscribe(value => console.log('debounceTime:', value))

  }
}
