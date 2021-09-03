import {Component, OnInit} from '@angular/core';
import {generate} from "rxjs";

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {
  public generateLink: string = 'https://rxjs.dev/api/index/function/generate';
  public generate: string = 'generate(options: GenerateBaseOptions<S>): Observable<S>';

  constructor() {
  }

  ngOnInit(): void {
  }

  generat() {
    generate({
      initialState: 0,
      condition: x => x < 3,
      iterate: x => x + 1,
    }).subscribe(value => console.log('generate:', value))

  }
}
