import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-olist-ui-toolbar',
  templateUrl: './olist-ui-toolbar.component.html',
  styleUrls: ['./olist-ui-toolbar.component.scss']
})
export class OlistUiToolbarComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
