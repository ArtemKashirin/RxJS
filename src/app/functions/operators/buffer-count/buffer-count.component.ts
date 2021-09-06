import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {bufferCount} from "rxjs/operators";

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.scss']
})
export class BufferCountComponent implements OnInit {
  public bufferCountLink: string = 'https://rxjs.dev/api/operators/bufferCount';
  public bufferCount: string = 'bufferCount<T>(bufferSize: number, startBufferEvery: number = null): OperatorFunction<T, T[]>';

  constructor() {
  }

  ngOnInit(): void {
  }

  bufferCoun() {
    interval(1000)
      .pipe(bufferCount(5))
      .subscribe(value => console.log('bufferCount:', value))
  }
}
