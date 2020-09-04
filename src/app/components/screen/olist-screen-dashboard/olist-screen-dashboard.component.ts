import { Seller } from './../../../model/seller';
import { Mentor } from './../../../model/mentor';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MentorService } from 'src/app/service/mentor/mentor.service';
import { SellerService } from 'src/app/service/seller/seller.service';

@Component({
  selector: 'app-olist-screen-dashboard',
  templateUrl: './olist-screen-dashboard.component.html',
  styleUrls: ['./olist-screen-dashboard.component.scss']
})
export class OlistScreenDashboardComponent implements OnInit {
  @Input() userType;
  name: string;
  user: Mentor | Seller;
  users: Array<Mentor> | Array<Seller>;
  constructor(private mentorService: MentorService, private sellerService: SellerService) { }
  ngOnInit() {
      if(this.userType === "mentor"){
        this.mentorService.getMentor().subscribe( response =>{
          this.user = response;
        });
        this.sellerService.getSellers().subscribe( response =>{
          this.users = response;
        });
      }else{
        this.sellerService.getSeller().subscribe( response =>{
         this.user = response;
        });
        this.mentorService.getMentors().subscribe( response =>{
         this.users = response;
        });
      }
      let firstName = this.user.name.split(" ");
      this.name = firstName[0];
  }

}
