import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.scss']
})
export class ElementAtComponent implements OnInit {
  public elementAtLink: string = 'https://rxjs.dev/api/operators/elementAt';
  public elementAt: string = 'elementAt<T, D = T>(index: number, defaultValue?: D): OperatorFunction<T, T | D>';

  constructor() {
  }

  ngOnInit(): void {
  }

  elementA() {
    interval(500)
      .pipe(elementAt(10))
      .subscribe(value => console.log('elementAt:', value))

  }
}
