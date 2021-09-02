import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  public ofLink: string = 'https://rxjs.dev/api/index/function/of';
  public of: string = 'of<T>(...args: (SchedulerLike | T)[]): Observable<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  off() {
    of(1, 2, 3, 4).subscribe(value => console.log('of:', value))
  }
}
