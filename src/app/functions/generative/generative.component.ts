import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generative',
  templateUrl: './generative.component.html',
  styleUrls: ['./generative.component.scss']
})
export class GenerativeComponent implements OnInit {
  public generative: string = 'https://rxjs.dev/guide/operators#creation-operators-2';
  public unionGenerative: string = 'https://rxjs.dev/guide/operators#creation-operators-2';

  // public Link: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
