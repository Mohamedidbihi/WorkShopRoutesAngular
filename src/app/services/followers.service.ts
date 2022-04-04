import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  apiUrl ="https://api.github.com/users/ouchenn/followers";
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any[]>(this.apiUrl);
  }

}
