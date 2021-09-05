import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {skipWhile} from "rxjs/operators";

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.scss']
})
export class SkipWhileComponent implements OnInit {
  public skipWhileLink: string = 'https://rxjs.dev/api/operators/skipWhile';
  public skipWhile: string = 'skipWhile<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  skipWhil() {
    interval(1000)
      .pipe(skipWhile(value => value < 4))
      .subscribe(value => console.log('skipWhile:', value))
  }
}
