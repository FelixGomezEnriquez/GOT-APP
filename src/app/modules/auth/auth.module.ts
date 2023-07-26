import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, LayoutModule, MatSnackBarModule],
})
export class AuthModule {}
