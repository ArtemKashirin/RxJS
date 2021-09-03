import {Component, OnInit} from '@angular/core';
import {iif, of} from "rxjs";

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.scss']
})
export class IifComponent implements OnInit {
  public iifLink: string = 'https://rxjs.dev/api/index/function/iif';
  public iif: string = 'iif<T, F>(condition: () => boolean, trueResult: ObservableInput<T>, falseResult: ObservableInput<F>): Observable<T | F>';

  constructor() {
  }

  ngOnInit(): void {
  }

  ii() {
    const isTrue: boolean = true;
    iif(() => isTrue, of('Истина'), of('Не истина'))
      .subscribe(value => console.log('iif:', value))

  }
}
