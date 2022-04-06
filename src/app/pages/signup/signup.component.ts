import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  date1: Date

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeSignupForm()
  }

  initializeSignupForm() {
    this.signUpForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      password: ['',[Validators.required]],
      date1: ['']
      
    })
  }

  signup(body){

  }

}
