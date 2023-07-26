import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    public auth: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}

  signWithEmail(email: string, password: string): void {
    console.log(email);
    console.log(password);
    this.auth
      .signInWithEmail(email, password)
      .then((user) => {
        if (user) {
          this.router.navigate(['/home']);
          this.openSnackBar('Inicio de sesion exitoso', 'X', [
            'green-snackbar',
          ]);
        }
      })
      .catch((err) => {
        this.openSnackBar(err.message, 'X', ['red-snackbar']);
        console.log('eewewe' + err);
      });
  }

  signWithGoogle(): void {
    this.auth.signInWithGoogle().then((user) => {
      if (user) {
        this.router.navigate(['/home']);
        this.openSnackBar('Inicio de sesion exitoso', 'X', ['green-snackbar']);
      }
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
