import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  public subjects: string = 'https://rxjs.dev/guide/subject';
  public classSubject: string = 'https://rxjs.dev/api/index/class/Subject';

  constructor() {
  }

  ngOnInit(): void {
    // const sub: Subject<number> = new Subject<number>();
    // sub.subscribe(value => console.log('Первый подписчик', value));
    // sub.next(1);
    // sub.next(2);
    // sub.subscribe(value => console.log('Второй подписчик', value));
    // sub.next(3);
    // sub.next(4);
    // sub.subscribe(value => console.log('Третий подписчик', value));
    // sub.next(5);
    // console.log('closed:', sub.closed);
    // console.log('observers', sub.observers);
    // console.log('asObservable()', sub.asObservable());
  }

}
