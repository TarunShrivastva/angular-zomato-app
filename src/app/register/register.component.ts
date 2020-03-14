import { Component, OnInit } from '@angular/core';
import { Configuration } from '../configuration';
import { ApiService } from '.././api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  config = new Configuration();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onFormSubmit(e:any) {
    if(e.controls.password.value !== e.controls.c_password.value) {
      console.log('Password Doesn\'t match');
      return false;
    }
    const user = { 
      'name': e.controls.name.value,
      'email' : e.controls.email.value,
      'password': e.controls.password.value,
      'c_password': e.controls.c_password.value,
    }

    this.api.registerUser(user);
  }
}
