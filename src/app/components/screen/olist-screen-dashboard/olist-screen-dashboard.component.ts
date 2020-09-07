import { Component, OnInit, Input, ChangeDetectorRef, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-olist-screen-dashboard',
  templateUrl: './olist-screen-dashboard.component.html',
  styleUrls: ['./olist-screen-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush    
})
export class OlistScreenDashboardComponent implements OnInit  {

  @Input() view;
  @Input() person: any;
  @Input() users: Array<any>;

  constructor() { }
  ngOnInit() {
  }

}
