import { Injectable } from '@angular/core';
import { Configuration } from '../configuration';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  config = new Configuration;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    this.http
    .post(this.config.apiUrl + '/register', user, this.httpOptions)
    .subscribe((response:any) => {
      const token = (response.success.token) !== null && (typeof (response.success.token) != 'undefined')? true:false;
      sessionStorage.setItem('x-auth', `$token`);
      return token;
    });
  }
 
  loginUser(user: any) {
    this.http
    .post(this.config.apiUrl + '/login', user, this.httpOptions)
    .subscribe((response:any) => {
      const token = (response.success.token) !== null && (typeof (response.success.token) != 'undefined')? true:false;
      sessionStorage.setItem('x-auth', `$token`);
      return token;
    });      
  }

}
