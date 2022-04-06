import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordInputComponent } from './_forms/password-input/password-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';




@NgModule({
  declarations: [PasswordInputComponent,TextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng9PasswordStrengthBarModule
    
  ],
  exports: [

    PasswordInputComponent,
    ReactiveFormsModule,
    TextInputComponent,
  ]
})
export class SharedModule { }
