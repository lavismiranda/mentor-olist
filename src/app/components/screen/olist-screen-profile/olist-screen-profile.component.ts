import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-olist-screen-profile',
  templateUrl: './olist-screen-profile.component.html',
  styleUrls: ['./olist-screen-profile.component.scss']
})
export class OlistScreenProfileComponent implements OnInit {
private user: any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.user = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    if(!history.state.enableMentor){
      this.router.navigateByUrl('/dashboard');
    }
    this.user = history.state;
  }

}
