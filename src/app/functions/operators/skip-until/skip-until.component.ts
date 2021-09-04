import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {delay, skipUntil, take} from "rxjs/operators";

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.scss']
})
export class SkipUntilComponent implements OnInit {
  public skipUntilLink: string = 'https://rxjs.dev/api/operators/skipUntil';
  public skipUntil: string = 'skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  skipUnti() {
    interval(1000)
      .pipe(take(40))
      .pipe(skipUntil(interval(10000).pipe(take(1))))
      .subscribe(value => console.log('skipUntil:', value))

  }
}
