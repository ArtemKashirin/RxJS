import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  public replaySubject: string = 'https://rxjs.dev/api/index/class/ReplaySubject';

  constructor() {
  }

  ngOnInit(): void {
  }

}
