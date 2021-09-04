import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {groupBy} from "rxjs/operators";

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByComponent implements OnInit {
  public groupByLink: string = 'https://rxjs.dev/api/operators/groupBy';
  public groupBy: string = 'groupBy<T, K, R>(keySelector: (value: T) => K, elementOrOptions?: void | ((value: any) => any) | BasicGroupByOptions<K, T> | GroupByOptionsWithElement<K, R, T>, duration?: (grouped: GroupedObservable<any, any>) => ObservableInput<any>, connector?: () => SubjectLike<any>): OperatorFunction<T, GroupedObservable<K, R>>';

  constructor() {
  }

  ngOnInit(): void {
  }

  groupB() {
    of(
      {id: 1, name: 'JavaScript'},
      {id: 2, name: 'Parcel'},
      {id: 2, name: 'webpack'},
      {id: 1, name: 'TypeScript'},
      {id: 7, name: 'TSLint'}
    ).pipe(groupBy(p => p.id)).subscribe(value => console.log('groupBy:', value))
  }
}
