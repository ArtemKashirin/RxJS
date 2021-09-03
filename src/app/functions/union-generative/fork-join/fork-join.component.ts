import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {interval, Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  public forkJoinLink: string = 'https://rxjs.dev/api/index/function/forkJoin';
  public forkJoin: string = 'forkJoin(...args: any[]): Observable<any>';

  constructor() { }

  ngOnInit(): void {
  }

  forkJoi() {
    const firstObs: Observable<number> = interval(1100).pipe(take(4));
    const secondObs: Observable<number> = interval(1000).pipe(take(2));
    forkJoin([firstObs, secondObs]).subscribe(value => console.log('forkJoin:', value));
  }
}
