import {Component, OnInit} from '@angular/core';
import {of, zip} from "rxjs";

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  public zipLink: string = 'https://rxjs.dev/api/index/function/zip';
  public zip: string = 'zip(...args: unknown[]): Observable<unknown>';

  constructor() {
  }

  ngOnInit(): void {
  }

  zi() {
    let age$ = of(27, 25, 29);
    let name$ = of('Foo', 'Bar', 'Beer');
    let isDev$ = of(true, true);
    zip(age$, name$, isDev$).subscribe(value => console.log('zip:', value));
  }
}
