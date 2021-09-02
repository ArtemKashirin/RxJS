import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generative',
  templateUrl: './generative.component.html',
  styleUrls: ['./generative.component.scss']
})
export class GenerativeComponent implements OnInit {
  public operators: string = 'https://rxjs.dev/guide/operators';

  constructor() {
  }

  ngOnInit(): void {
  }

}
