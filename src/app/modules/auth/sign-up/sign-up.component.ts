import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    public auth: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}

  signWithGoogle(): void {
    this.auth.signInWithGoogle().then((user) => {
      if (user) {
        this.router.navigate(['/home']);
        this.openSnackBar('Inicio de sesion exitoso', 'X', ['green-snackbar']);
      }
    });
  }
  signUpWithEmail(email: string, password: string): void {
    this.auth
      .signUpWithEmail(email, password)
      .then((user) => {
        if (user) {
          this.router.navigate(['/home']);
          this.openSnackBar('Registro exitoso', 'X', ['green-snackbar']);
        }
      })
      .catch((err) => {
        this.openSnackBar(err.message, 'X', ['red-snackbar']);
      });
  }
  openSnackBar(message: string, action: string, style: string[]): void {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: style,
    });
  }
}
