import { Injectable } from '@angular/core';
import { Users } from './model/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStatus } from './model/UserStatus';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loginStatus: boolean

  currentUser: UserStatus

  UserStatus: any;
  constructor(public http: HttpClient) {
    this.loginStatus = false
  }

  signup(users: Users) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.post('http://localhost:3001/companyposts/signup', users, httpOptions)
  }

  loginUsers(users: Users) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.post('http://localhost:3001/companyposts/signin', users, httpOptions)
  }

  signOut() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.post('http://localhost:3001/companyposts/signout', {}, httpOptions)
  }
  editInfo(user: Users) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'someToken'
      }),
      withCredentials: true
    };
    return this.http.put('http://localhost:3001/companyposts/user/edit', user, httpOptions)


  }


}


