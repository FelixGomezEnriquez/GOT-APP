import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getAuthState().pipe(
      map((user) => {
        if (user) {
          // El usuario está autenticado, permite el acceso
          return true;
        } else {
          // El usuario no está autenticado, redirige al inicio de sesión
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
