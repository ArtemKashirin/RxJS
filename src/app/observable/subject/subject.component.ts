import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  public Subject: string = 'https://rxjs.dev/api/index/class/Subject';

  constructor() {
  }

  ngOnInit(): void {
    const subject: Subject<any> = new Subject();
    subject.subscribe( v => console.log('observer A:', v));
    subject.subscribe( v => console.log('observer B:', v));
    subject.subscribe( v => console.log('observer C:', v));

    // subject.next('1')
  }

}
