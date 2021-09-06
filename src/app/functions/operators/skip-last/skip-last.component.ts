import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {skipLast} from "rxjs/operators";

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.scss']
})
export class SkipLastComponent implements OnInit {
  public skipLastLink: string = 'https://rxjs.dev/api/operators/skipLast';
  public skipLast: string = 'skipLast<T>(skipCount: number): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  skipLas() {
    of(1, 2, 3, 4, 5, 6, 7)
      .pipe(skipLast(3))
      .subscribe(value => console.log('skipLast:', value))
  }
}
