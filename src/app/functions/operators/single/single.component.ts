import {Component, OnInit} from '@angular/core';
import {from} from "rxjs";
import {single} from "rxjs/operators";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  public singleLink: string = 'https://rxjs.dev/api/operators/single';
  public single: string = 'single<T>(predicate?: (value: T, index: number, source: Observable<T>) => boolean): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  singl() {
    from([1, 1, 4, 5, 3, 7, 8])
      .pipe(single(value => value == 3))
      .subscribe(value => console.log('single:', value))
  }
}
