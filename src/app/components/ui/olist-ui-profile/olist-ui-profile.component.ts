import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-olist-ui-profile',
  templateUrl: './olist-ui-profile.component.html',
  styleUrls: ['./olist-ui-profile.component.scss']
})
export class OlistUiProfileComponent implements OnInit {

  @Input() name;

  constructor(){

  }
  ngOnInit(){
    
  }

}