import {Component, OnInit} from '@angular/core';
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {
  public ajaxLink: string = 'https://rxjs.dev/api/ajax/ajax';

  constructor() {
  }

  ngOnInit(): void {
  }

  ajax() {
    ajax('https://jsonplaceholder.typicode.com/todos')
      .subscribe(value => console.log('ajax:', value.response))
  }
}
