import { Seller } from './model/seller';
import { Mentor } from './model/mentor';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view: string = 'mentor';
  constructor(){}
}
