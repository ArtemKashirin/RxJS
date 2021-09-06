import {Component, OnInit} from '@angular/core';
import {interval, of} from "rxjs";
import {skip} from "rxjs/operators";

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {
  public skipLink: string = 'https://rxjs.dev/api/operators/skip';
  public skip: string = 'skip<T>(count: number): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  ski() {
    of(1, 2, 3, 4, 5, 6, 7)
      .pipe(skip(3))
      .subscribe(value => console.log('skip:', value))

  }
}
