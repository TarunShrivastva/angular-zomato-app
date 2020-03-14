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
    .post(this.config.apiUrl + '/register', user)
    .subscribe(x =>console.log(x));
  }
 
}
