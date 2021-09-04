import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {scan} from "rxjs/operators";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  public scanLink: string = 'https://rxjs.dev/api/operators/scan';
  public scan: string = 'scan<V, A, S>(accumulator: (acc: V | A | S, value: V, index: number) => A, seed?: S): OperatorFunction<V, V | A>';

  constructor() {
  }

  ngOnInit(): void {
  }

  sca() {
    of(1, 2, 3, 4, 5)
      .pipe(scan((acc, value) => acc + value))
      .subscribe(value => console.log('scan:', value))

  }
}
