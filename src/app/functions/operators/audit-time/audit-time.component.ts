import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {auditTime} from "rxjs/operators";

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styleUrls: ['./audit-time.component.scss']
})
export class AuditTimeComponent implements OnInit {
  public auditTimeLink: string = 'https://rxjs.dev/api/operators/auditTime';
  public auditTime: string = 'auditTime<T>(duration: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  auditTim() {
    interval(500)
      .pipe(auditTime(5000))
      .subscribe(value => console.log('auditTime:', value))

  }
}
