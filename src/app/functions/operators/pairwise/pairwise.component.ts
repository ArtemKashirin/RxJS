import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {pairwise} from "rxjs/operators";

@Component({
  selector: 'app-pairwise',
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.scss']
})
export class PairwiseComponent implements OnInit {
  public pairwiseLink: string = 'https://rxjs.dev/api/operators/pairwise';
  public pairwise: string = 'pairwise<T>(): OperatorFunction<T, [T, T]>';

  constructor() { }

  ngOnInit(): void {
  }

  pairwis() {
    interval(1000)
      .pipe(pairwise())
      .subscribe(value => console.log('pairwise:', value))

  }
}
