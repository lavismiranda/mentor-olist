import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-olist-screen-profile',
  templateUrl: './olist-screen-profile.component.html',
  styleUrls: ['./olist-screen-profile.component.scss']
})
export class OlistScreenProfileComponent implements OnInit {
private user: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
       this.user = params['user']; 
    });

    console.log(this.user);
  }

}
