import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {mapTo} from "rxjs/operators";

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {
  public mapToLink: string = 'https://rxjs.dev/api/operators/mapTo';
  public mapTo: string = 'mapTo<R>(value: R): OperatorFunction<any, R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  mapT() {
    of(1, 2, 3)
      .pipe(mapTo('No'))
      .subscribe(value => console.log('mapTo:', value))

  }
}
