import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '.././_helpers/must-match-validator';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  response:boolean = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      c_password: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'c_password')
    });
  }

   // convenience getter for easy access to form fields
   get formData() { return this.registerForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }

       // display form values on success
      this.api.registerUser(JSON.stringify(this.registerForm.value, null, 4));
   }

   onReset() {
       this.submitted = false;
       this.registerForm.reset();
   }

}
