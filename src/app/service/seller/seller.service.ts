import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from 'src/app/model/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient) { }
  private getSellers(){
     this.http.get<Seller[]>('http://localhost:4200/api/sellers');
  }
}
