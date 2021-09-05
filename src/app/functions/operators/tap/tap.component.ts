import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  public tapLink: string = 'https://rxjs.dev/api/operators/tap';
  public tap: string = 'tap<T>(observerOrNext?: Partial<Observer<T>> | ((value: T) => void), error?: (e: any) => void, complete?: () => void): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  ta() {
    interval(1000)
      .pipe(tap(value => {
        if(value == 4) throw new Error('ERROR')

      }))
      .subscribe(value => console.log('tap:', value))
  }
}
