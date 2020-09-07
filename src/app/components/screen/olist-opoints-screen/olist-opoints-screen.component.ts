import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MentorService } from 'src/app/service/mentor/mentor.service';
import { SellerService } from 'src/app/service/seller/seller.service';

@Component({
  selector: 'app-olist-opoints-screen',
  templateUrl: './olist-opoints-screen.component.html',
  styleUrls: ['./olist-opoints-screen.component.scss']
})
export class OlistOpointsScreenComponent implements OnInit {

  @Input() view = 'mentor';
  user: any;
  users: Array<any>;
  constructor(private mentorService: MentorService, private sellerService: SellerService) { }

  ngOnInit() {
     this.buildData(this.view);
  }

  buildData(view: string){
    if(view === "mentor"){
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
  }

  viewChanged(newView) {
    this.buildData(newView.value);
  }
}
