import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {mergeScan} from "rxjs/operators";

@Component({
  selector: 'app-merge-scan',
  templateUrl: './merge-scan.component.html',
  styleUrls: ['./merge-scan.component.scss']
})
export class MergeScanComponent implements OnInit {
  public mergeScanLink: string = 'https://rxjs.dev/api/operators/mergeScan';
  public mergeScan: string = 'mergeScan<T, R>(accumulator: (acc: R, value: T, index: number) => ObservableInput<R>, seed: R, concurrent: number = Infinity): OperatorFunction<T, R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  mergeSca() {
    of(1, 2, 3, 4)
      .pipe(mergeScan((acc, value) => of(acc + value), 0))
      .subscribe(value => console.log('mergeScan:', value))

  }
}
