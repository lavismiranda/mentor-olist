import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-olist-ui-evaluation',
  templateUrl: './olist-ui-evaluation.component.html',
  styleUrls: ['./olist-ui-evaluation.component.scss']
})
export class OlistUiEvaluationComponent implements OnInit {

  @Input() evaluation;
  constructor() { }
  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

}
