import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {timestamp} from "rxjs/operators";

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {
  public timestampLink: string = 'https://rxjs.dev/api/operators/timestamp';
  public timestamp: string = 'timestamp<T>(timestampProvider: TimestampProvider = dateTimestampProvider): OperatorFunction<T, Timestamp<T>>';

  constructor() { }

  ngOnInit(): void {
  }

  timestam() {
    interval(1000)
      .pipe(timestamp())
      .subscribe(value => console.log('timestamp:', value))
  }
}
