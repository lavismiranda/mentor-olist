import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MentorService } from 'src/app/service/mentor/mentor.service';

@Component({
  selector: 'app-olist-screen-profile',
  templateUrl: './olist-screen-profile.component.html',
  styleUrls: ['./olist-screen-profile.component.scss']
})
export class OlistScreenProfileComponent implements OnInit {
private user: any;
private person: any;
  constructor(private mentorService: MentorService, private router: Router) { 
    this.user = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    if(!history.state.enableMentor){
      this.router.navigateByUrl('/dashboard');
    }
    this.person = history.state.person;
    let id = history.state.id;
    this.mentorService.getMentorById(id).subscribe( response =>{
          this.user = response;
    });


  }

}
