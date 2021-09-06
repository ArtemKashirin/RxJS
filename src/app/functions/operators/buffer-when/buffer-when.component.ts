import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, of} from "rxjs";
import {buffer, bufferWhen} from "rxjs/operators";

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.scss']
})
export class BufferWhenComponent implements OnInit {
  public bufferWhenLink: string = 'https://rxjs.dev/api/operators/bufferWhen';
  public bufferWhen: string = 'bufferWhen<T>(closingSelector: () => ObservableInput<any>): OperatorFunction<T, T[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  bufferWhe() {
    fromEvent(document, 'click').pipe(
      bufferWhen(() => interval(5000)))
      .subscribe(value => console.log('bufferWhen:', value))
  }
}
