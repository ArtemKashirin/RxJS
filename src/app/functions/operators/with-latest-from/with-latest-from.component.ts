import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from "rxjs";
import {withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {
  public withLatestFromLink: string = 'https://rxjs.dev/api/operators/withLatestFrom';
  public withLatestFrom: string = 'withLatestFrom<T, R>(...inputs: any[]): OperatorFunction<T, R | any[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  withLatestFro() {
    fromEvent(document, 'click')
      .pipe(withLatestFrom(interval(1000)))
      .subscribe(value => console.log('withLatestFrom:', value));
  }
}
