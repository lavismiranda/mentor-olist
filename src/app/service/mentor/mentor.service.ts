import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mentor } from 'src/app/model/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  constructor(private http: HttpClient) { }
  public getMentor(){
    return this.http.get<Mentor>('http://localhost:4200/api/mentor');
  }

   public getMentorById(id: number){
    return this.http.get<Mentor>(`http://localhost:4200/api/${id}/mentor`);
  }
  public getMentors(){
    return this.http.get<Mentor[]>('http://localhost:4200/api/mentors');
  }

  
}
