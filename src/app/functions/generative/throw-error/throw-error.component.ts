import {Component, OnInit} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {interval} from "rxjs";
import {concatMap, map} from "rxjs/operators";

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {
  public throwErrorLink: string = 'https://rxjs.dev/api/index/function/throwError';
  public throwError: string = 'throwError(errorOrErrorFactory: any): Observable<never>';

  constructor() {
  }

  ngOnInit(): void {
  }

  throwErro() {
    throwError('Error').subscribe(null, error => console.log(' throwError:', error))

  }
}
