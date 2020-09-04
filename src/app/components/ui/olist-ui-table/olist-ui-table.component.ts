import { Component, OnInit, Input } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-olist-ui-table',
  templateUrl: './olist-ui-table.component.html',
  styleUrls: ['./olist-ui-table.component.scss']
})
export class OlistUiTableComponent implements OnInit {
  @Input() users;
  constructor() { }
  ngOnInit() {
    console.log("lista de users da tabela", this.users);
  }

}
