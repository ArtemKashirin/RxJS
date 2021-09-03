import {Component, OnInit} from '@angular/core';
import {partition} from 'rxjs';
import {interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {
  public partitionLink: string = 'https://rxjs.dev/api/index/function/partition';
  public partition: string = 'partition<T>(source: ObservableInput<T>, predicate: (this: any, value: T, index: number) => boolean, thisArg?: any): [Observable<T>, Observable<T>]';

  constructor() {
  }

  ngOnInit(): void {
  }

  partitio() {
    const [first$, second$] = partition(interval(500).pipe(take(10)), value => value > 5);
    first$.subscribe(value => console.log('partition:', value))

  }
}
