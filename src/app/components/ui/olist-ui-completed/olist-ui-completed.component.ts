import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-olist-ui-completed',
  templateUrl: './olist-ui-completed.component.html',
  styleUrls: ['./olist-ui-completed.component.scss']
})
export class OlistUiCompletedComponent implements OnInit {

  @Input() completed;

  constructor() { }

  ngOnInit() {
  }

}
