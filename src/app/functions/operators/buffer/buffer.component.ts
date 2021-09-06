import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from "rxjs";
import {buffer} from "rxjs/operators";

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {
  public bufferLink: string = 'https://rxjs.dev/api/operators/buffer';
  public buffer1: string = 'buffer<T>(closingNotifier: Observable<any>): OperatorFunction<T, T[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  buffe() {
    fromEvent(document, 'click').pipe(
      buffer(interval(5000)))
      .subscribe(value => console.log('buffer:', value))

  }
}
