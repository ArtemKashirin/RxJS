import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {ignoreElements, take} from "rxjs/operators";

@Component({
  selector: 'app-ignore-elements',
  templateUrl: './ignore-elements.component.html',
  styleUrls: ['./ignore-elements.component.scss']
})
export class IgnoreElementsComponent implements OnInit {
  public ignoreElementsLink: string = 'https://rxjs.dev/api/operators/ignoreElements';
  public ignoreElements: string = 'ignoreElements(): OperatorFunction<any, never>';

  constructor() {
  }

  ngOnInit(): void {
  }

  ignoreElement() {
    interval(500).pipe(
      take(4),
      ignoreElements())
      .subscribe(undefined, undefined, () => console.log('ignoreElements:', 'complete'))

  }
}
