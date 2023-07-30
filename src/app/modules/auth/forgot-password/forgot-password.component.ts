import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(
    public auth: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}
  sendEmail(email: string): void {
    console.log(email);
    this.auth.ForgotPassword(email);
  }
  openSnackBar(message: string, action: string, style: string[]): void {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: style,
    });
  }
}
