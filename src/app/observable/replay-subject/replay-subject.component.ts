import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  public ReplaySubject: string = 'https://rxjs.dev/api/index/class/ReplaySubject';
  private repSub: ReplaySubject<number>;

  constructor() {
  }

  ngOnInit(): void {
    // this.repSub = new ReplaySubject(1);
    // this.repSub.subscribe( value => console.log('Первый ReplaySubject:', value));
    // this.repSub.next(1);
    // this.repSub.next(2);
    // this.repSub.next(3);
    // this.repSub.subscribe( value => console.log('Второй ReplaySubject:', value));
    // this.repSub.subscribe( value => console.log('Третий ReplaySubject:', value));
    // this.repSub.next(4);
  }

}
