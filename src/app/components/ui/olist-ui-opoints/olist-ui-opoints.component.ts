import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-olist-ui-opoints',
  templateUrl: './olist-ui-opoints.component.html',
  styleUrls: ['./olist-ui-opoints.component.scss']
})
export class OlistUiOpointsComponent implements OnInit {

  @Input() oPoints;
  points: number;
  
  constructor() { }

  ngOnInit() {
    this.points = this.oPoints;
  }

}
