import { Component, OnInit, Input } from '@angular/core';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-olist-ui-coment',
  templateUrl: './olist-ui-coment.component.html',
  styleUrls: ['./olist-ui-coment.component.scss']
})
export class OlistUiComentComponent implements OnInit {

  @Input() comments;

  constructor() { }

  ngOnInit() {
  }

}
