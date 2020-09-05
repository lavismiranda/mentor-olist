import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-olist-ui-sent',
  templateUrl: './olist-ui-sent.component.html',
  styleUrls: ['./olist-ui-sent.component.scss']
})
export class OlistUiSentComponent implements OnInit {

  @Input() sent;

  constructor() { }

  ngOnInit() {
  }

}
