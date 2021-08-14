import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  public Observable: string = 'https://rxru.fun/#/overview/observables/';

  constructor() {
  }

  ngOnInit(): void {
    const obs$: Observable<any> = new Observable<any>(function subscriber (subscriber) {
      console.log(subscriber)
    });
    // obs$.subscribe(s => console.log(s))
  }

}
