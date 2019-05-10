import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    return from(firebase.auth().signInWithEmailAndPassword(email, password))
      .pipe(
        map(result => {
          if (result) {
            firebase.auth().currentUser.getIdToken()
              .then((token) => {
                localStorage.setItem('token', token);
              });
            return true;
          }

          return false;
        })
      );
  }

  signoutUser($event) {
    $event.preventDefault();

    firebase.auth().signOut();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }
}
