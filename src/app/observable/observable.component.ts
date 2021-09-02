import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  public observable: string = 'https://rxjs.dev/api/index/class/Observable';
  public createObservable: string = 'https://rxjs.dev/guide/observable#creating-observables';
  public subscribingToObservables: string = 'https://rxjs.dev/guide/observable#subscribing-to-observables';

  constructor() {
  }

  ngOnInit(): void {
    // console.log('Observable:', new Observable())
    // console.log('.pipe():', new Observable().pipe())
    // console.log('.subscribe():', new Observable().subscribe())
  }

}
