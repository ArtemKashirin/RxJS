import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {bufferTime} from "rxjs/operators";

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss']
})
export class BufferTimeComponent implements OnInit {
  public bufferTimeLink: string = 'https://rxjs.dev/api/operators/bufferTime';
  public bufferTime: string = 'bufferTime<T>(bufferTimeSpan: number, ...otherArgs: any[]): OperatorFunction<T, T[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  bufferTim() {
    interval(1000)
      .pipe(bufferTime(5000))
      .subscribe(value => console.log('bufferTime:', value))
  }
}
