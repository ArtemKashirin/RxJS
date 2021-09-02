import {Component, OnInit} from '@angular/core';
import {range} from "rxjs";

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
  public rangeLink: string = 'https://rxjs.dev/api/index/function/range';
  public range: string = 'range(start: number, count?: number): Observable<number>';

  constructor() {
  }

  ngOnInit(): void {
  }

  rang() {
    range(0, 10).subscribe(value => console.log('range:', value));
  }
}
