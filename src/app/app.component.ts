import { Seller } from './model/seller';
import { Mentor } from './model/mentor';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sellers: Array<Seller>;
  mentor: Mentor;
  mentors: Array<Mentor>;

  title = 'olist-mentor-app ';
   displayedColumns: string[] = ['Vendedor', 'Ativo Há', 'Avaliação'];
  dataSource = ELEMENT_DATA;
  constructor(http: HttpClient){
    http.get<Seller[]>('http://localhost:4200/api/sellers').subscribe( res => {
        this.sellers = res;
        console.log(this.sellers);
    });

    http.get<Mentor>('http://localhost:4200/api/mentor').subscribe( res => {
        this.mentor = res;
        console.log(this.mentor);
        this.title = this.title + this.mentor.name;
    });

    http.get<Mentor[]>('http://localhost:4200/api/mentors').subscribe( res => {
        this.mentors = res;
        this.dataSource = this.mentors;
        console.log(this.mentors);
    });
  }
}
