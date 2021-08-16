import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  public BehaviorSubject: string = 'https://rxjs.dev/api/index/class/BehaviorSubject';

  constructor() {
  }

  ngOnInit(): void {
    // const behSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    // behSub.subscribe( val => console.log('First subscreber:',  val));
    // behSub.subscribe( val => console.log('Second subscreber:',  val));
    // behSub.next(1);
    // behSub.subscribe( val => console.log('Third subscreber:',  val));
    // behSub.next(2);
    // behSub.subscribe( val => console.log('Fourth subscreber:',  val));
    //
    // console.log(behSub.closed);
    // console.log(behSub);

  }

}
