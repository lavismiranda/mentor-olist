import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olist-ui-table',
  templateUrl: './olist-ui-table.component.html',
  styleUrls: ['./olist-ui-table.component.scss']
})
export class OlistUiTableComponent implements OnInit {
  @Input() users;
  @Input() person;
  constructor(private router: Router) { }
  ngOnInit() {
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  goToProfile(user: any) {
        this.router.navigateByUrl('profile');
};

}