import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {defaultIfEmpty} from "rxjs/operators";

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.scss']
})
export class DefaultIfEmptyComponent implements OnInit {
  public defaultIfEmptyLink: string = 'https://rxjs.dev/api/operators/defaultIfEmpty';
  public defaultIfEmpty: string = 'defaultIfEmpty<T, R>(defaultValue: R): OperatorFunction<T, T | R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  defaultIfEmpt() {
    of<any>()
      .pipe(defaultIfEmpty("0"))
      .subscribe(value => console.log('defaultIfEmpty:', value))

  }
}
