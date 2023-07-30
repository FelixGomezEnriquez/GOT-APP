import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserCredential } from '@firebase/auth-types';
import { GoogleAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}
  // Métodos de autenticación

  // Registro de usuario con correo electrónico y contraseña
  signUpWithEmail(email: string, password: string): Promise<any> {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: UserCredential) => {
        console.log(userCredential);
        // Obtener el usuario actual
        const user = userCredential.user;
        // Crear la variable en el LocalStorage
        localStorage.setItem('user', JSON.stringify(user));
        return userCredential;
      });
  }

  // Inicio de sesión con correo electrónico y contraseña
  signInWithEmail(email: string, password: string): Promise<any> {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: UserCredential) => {
        // Obtener el usuario actual
        const user = userCredential.user;

        // Crear la variable en el LocalStorage
        localStorage.setItem('user', JSON.stringify(user));

        return userCredential;
      });
  }

  // Inicio de sesión con proveedor de Google
  signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return this.auth
      .signInWithPopup(provider)
      .then((userCredential: UserCredential) => {
        // Obtener el usuario actual
        const user = userCredential.user;

        console.log(user);

        localStorage.setItem('user', JSON.stringify(user));

        return userCredential;
      });
  }

  // Cerrar sesión
  signOut(): Promise<void> {
    localStorage.removeItem('user');

    return this.auth.signOut();
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        return true;
      })
      .catch((error: any) => {
        console.log(error);
        return false;
      });
  }

  // Obtener el estado de autenticación actual
  getAuthState(): Observable<User | null> {
    console.log(this.auth.authState);
    return this.auth.authState;
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
}
