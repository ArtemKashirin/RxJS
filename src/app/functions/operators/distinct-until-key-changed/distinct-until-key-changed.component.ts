import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {distinctUntilKeyChanged} from "rxjs/operators";

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.scss']
})
export class DistinctUntilKeyChangedComponent implements OnInit {
  public distinctUntilKeyChangedLink: string = 'https://rxjs.dev/api/operators/distinctUntilKeyChanged';
  public distinctUntilKeyChanged: string = 'distinctUntilKeyChanged<T, K extends keyof T>(key: K, compare?: (x: T[K], y: T[K]) => boolean): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  distinctUntilKeyChange() {
    of(    { age: 4, name: 'Foo'},
      { age: 7, name: 'Bar'},
      { age: 5, name: 'Foo'},
      { age: 6, name: 'Foo'})
      .pipe(distinctUntilKeyChanged('name'))
      .subscribe(value => console.log('distinctUntilKeyChanged:', value))

  }
}
