import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserName(_userid){
    return this.http.get('http://localhost:8000/users/getname/'+_userid)
  }

}
