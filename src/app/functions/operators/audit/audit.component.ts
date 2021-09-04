import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {audit} from "rxjs/operators";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  public auditLink: string = 'https://rxjs.dev/api/operators/audit';
  public audit: string = 'audit<T>(durationSelector: (value: T) => ObservableInput<any>): MonoTypeOperatorFunction<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  audi() {
    interval(500)
      .pipe(audit(v => interval(v + 3000)))
      .subscribe(value => console.log('audit:', value))

  }
}
