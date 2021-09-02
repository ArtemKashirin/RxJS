import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
  public behaviorSubject: string = 'https://rxjs.dev/api/index/class/BehaviorSubject';

  constructor() {
  }

  ngOnInit(): void {
  }

}
