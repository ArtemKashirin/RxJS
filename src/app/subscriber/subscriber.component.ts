import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  public subscriber: string = 'https://rxjs.dev/api/index/class/Subscriber';

  constructor() {
  }

  ngOnInit(): void {
  }

}
