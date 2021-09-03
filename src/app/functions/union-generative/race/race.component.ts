import {Component, OnInit} from '@angular/core';
import {race} from 'rxjs';
import {interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  public raceLink: string = 'https://rxjs.dev/api/index/function/race';
  public race: string = 'race<T>(...sources: (Observable<T> | InteropObservable<T> | AsyncIterable<T> | PromiseLike<T> | ArrayLike<T> | Iterable<...> | ReadableStreamLike<...> | ObservableInput<...>[])[]): Observable<any>';

  constructor() {
  }

  ngOnInit(): void {
  }

  rac() {
    const firstObs: Observable<number> = interval(2000).pipe(take(4));
    const secondObs: Observable<number> = interval(1000).pipe(take(2));
    race(firstObs, secondObs).subscribe(value => console.log('race:', value));
  }
}
