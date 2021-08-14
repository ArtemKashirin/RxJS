import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  public Subscriber: string = 'https://rxjs.dev/api/index/class/Subscriber';

  constructor() {
  }

  ngOnInit(): void {
    // const obs$ = new Observable(function subscribe(subscriber){
    //   subscriber.next('value');
    //   subscriber.error('error');
    //   subscriber.complete()
    // }).subscribe(v => console.log(v))
  }

}
