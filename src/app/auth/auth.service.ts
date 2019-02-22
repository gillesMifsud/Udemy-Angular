import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router) {}
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }
    // Sign in user and set the token
    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    // Get token when user sign in
                    // As we are signed in, we get user token with getIdToken() which is the promise
                    firebase.auth().currentUser.getIdToken()
                        // Then wait for the token
                        .then(
                            // And eventually when it will arrive,
                            // we set the token we got from getIdToken() as the token (this.token) property from AuthService Class
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }
    getToken() {
        // Get token when user sign in
        // As we are signed in, we get user token with getIdToken() which is the promise
        firebase.auth().currentUser.getIdToken()
        // Then wait for the token
            .then(
                // And eventually when it will arrive,
                // we set the token we got from getIdToken() as the token (this.token) property from AuthService Class
                (token: string) => this.token = token
            )
            .catch(
                error => console.log(error)
            );
        // Return the token
        return this.token;
    }
    isAuthenticated() {
        return this.token != null;
    }
    logOut() {
        firebase.auth().signOut();
        this.token = null;
    }
}
