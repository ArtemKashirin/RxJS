import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {sample} from "rxjs/operators";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  public sampleLink: string = 'https://rxjs.dev/api/operators/sample';
  public sample: string = 'sample<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  sampl() {
    interval(500)
      .pipe(sample(interval(5000)))
      .subscribe(value => console.log('sample:', value))

  }
}
