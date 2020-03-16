import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  response:boolean = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

   // convenience getter for easy access to form fields
   get formData() { return this.loginForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }

       // display form values on success
       console.log(JSON.stringify(this.loginForm.value, null, 4));
       
      this.api.loginUser(JSON.stringify(this.loginForm.value, null, 4));
   }

   onReset() {
       this.submitted = false;
       this.loginForm.reset();
   }

}
