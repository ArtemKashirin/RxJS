import {Component, OnInit} from '@angular/core';
import {AsyncSubject} from "rxjs";

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  public AsyncSubject: string = 'https://rxjs.dev/api/index/class/AsyncSubject';
  private asuncSub: AsyncSubject<number>;


  constructor() {
  }

  ngOnInit(): void {
    // this.asuncSub = new AsyncSubject<number>();
    // this.asuncSub.next(1)
    // this.asuncSub.subscribe(value => console.log('Первый:', value));
    // this.asuncSub.subscribe(value => console.log('Второй:', value));
    // this.asuncSub.subscribe(value => console.log('Третий:', value));
    // this.asuncSub.subscribe(value => console.log('Четвертый:', value));
    // this.asuncSub.next(2)
    // this.asuncSub.complete();

  }

}
