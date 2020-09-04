import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mentor } from 'src/app/model/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  constructor(private http: HttpClient) { }
  private getMentor(){
    return this.http.get<Mentor>('http://localhost:4200/api/mentor');
  }
  private getMentors(){
    return this.http.get<Mentor[]>('http://localhost:4200/api/mentors');
  }

  
}
