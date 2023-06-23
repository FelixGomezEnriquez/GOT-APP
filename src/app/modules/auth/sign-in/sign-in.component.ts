import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(public auth: AuthService, public router: Router) {
    this.auth.signInWithGoogle().then((e) => {
      console.log(e);
      this.router.navigate(['/home']);
    });
  }
}
