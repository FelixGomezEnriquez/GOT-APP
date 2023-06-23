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
  signUpWithEmail(email: string, password: string): Promise<UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Inicio de sesión con correo electrónico y contraseña
  signInWithEmail(email: string, password: string): Promise<UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Inicio de sesión con proveedor de Google
  signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  // Cerrar sesión
  signOut(): Promise<void> {
    return this.auth.signOut();
  }

  // Obtener el estado de autenticación actual
  getAuthState(): Observable<User | null> {
    return this.auth.authState;
  }
}
