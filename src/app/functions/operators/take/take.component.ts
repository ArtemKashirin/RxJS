import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  public takeLink: string = 'https://rxjs.dev/api/operators/take';
  public take: string = 'take<T>(count: number): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  tak() {
    interval(500)
      .pipe(take(4))
      .subscribe(value => console.log('take:', value))

  }
}
