import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public mapLink: string = 'https://rxjs.dev/api/operators/map';
  public map: string = 'map<T, R>(project: (value: T, index: number) => R, thisArg?: any): OperatorFunction<T, R>';

  constructor() {
  }

  ngOnInit(): void {
  }

  ma() {
    interval(1000).pipe(
      map(v => v * 10),
      take(10))
      .subscribe(value => console.log('map:', value))

  }
}
