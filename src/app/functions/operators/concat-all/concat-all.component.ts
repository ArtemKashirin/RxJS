import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, of} from "rxjs";
import {concatAll, map, take} from "rxjs/operators";

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent implements OnInit {
  public concatAllLink: string = 'https://rxjs.dev/api/operators/concatAll';
  public concatAll: string = 'concatAll<O extends ObservableInput<any>>(): OperatorFunction<O, ObservedValueOf<O>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  concatAl() {
    of(1, 2, 3, 4)
      .pipe(
        map(ev => interval(100).pipe(take(4))))
      .pipe(concatAll())
      .subscribe(value => console.log('concatAll:', value));


  }
}
