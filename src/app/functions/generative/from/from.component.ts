import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  public fromLink: string = 'https://rxjs.dev/api/index/function/from';
  public from: string = 'from<T>(input: ObservableInput<T>): Observable<T>';

  constructor() {
  }

  ngOnInit(): void {
  }

  fro() {
    from([1, 2, 3, 4]).subscribe(value => console.log('from:', value));
  }
}
