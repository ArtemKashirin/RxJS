import {Component, OnInit} from '@angular/core';
import {from} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filterLink: string = 'https://rxjs.dev/api/operators/filter';
  public filter: string = 'filter<T>(predicate: (value: T, index: number) => boolean, thisArg?: any): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  filte() {
    from([1, 1, 4, 5, 3, 7, 8])
      .pipe(filter(value => value > 3))
      .subscribe(value => console.log('filter:', value))

  }
}
