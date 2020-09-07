import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-olist-ui-toolbar',
  templateUrl: './olist-ui-toolbar.component.html',
  styleUrls: ['./olist-ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush    
})
export class OlistUiToolbarComponent implements OnInit, OnChanges {

  @Input() person;
  firstName: string;

  constructor() { }

  ngOnInit() {
       this.getFirstName();
  }

  getFirstName(){
    this.firstName = this.person.name.split(" ")[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFirstName();
  }

}
