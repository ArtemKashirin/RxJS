import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Observable} from "rxjs";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public Subscription: string = 'https://rxjs.dev/api/index/class/Subscription'

  constructor() {
  }

  ngOnInit(): void {
    // let obs$: Observable<any> = new Observable<any>(sub => {
    //   sub.next(1)
    // });
    // let subscription: Subscription = obs$.subscribe(v => console.log(v))
    // let subscription2: Subscription = obs$.subscribe(v => console.log(v))
    // console.log(subscription.unsubscribe())
    // console.log(subscription.closed)
    // console.log(subscription.add(subscription2))
    // console.log(subscription.remove(subscription2))

  }

}
