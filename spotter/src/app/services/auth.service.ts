import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from '../Shared/user.model';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user: User = null;
    errorMessage: string = null;

    constructor(public afAuth: AngularFireAuth, public router: Router) {
        this.afAuth.authState.subscribe(user => {
            if(user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        })
     }

    // Login with an email and password with firebase auth.
    async loginEmailPassword(email: string, password: string) {
        var result =  this.afAuth.auth.signInWithEmailAndPassword(email, password);
        result.catch((error) => {
            this.handleError(error.code);
            return;
        });
        result.then((res) => {
            this.router.navigate(['']);
        });
    }

    // Login with a google account through firebase auth.
    async loginWithGoogle() {
        var result = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                this.router.navigate(['']);
            }).catch(this.handleError);
    }  

    // Register a user with an email and password
    async register(email: string, password: string) {
        var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch(this.handleError);
        if(this.user) {
            this.sendEmailVerification();
        }
    }

    // Send an email verification to the newly registered user
    async sendEmailVerification() {
        await this.afAuth.auth.currentUser.sendEmailVerification();
        this.router.navigate(['register/verify-email']);
    }

    // Send an email to a user to reset their password
    async sendPasswordResetEmail(passwordResetEmail: string) {
        return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
    }

    // Log a user out
    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['']);
    }

    // Display an error message with the failed login or registration
    private handleError(error: string) {
        let errorMessage = 'Error, please try again later.';
        switch(error) {
            case 'auth/user-not-found':
                errorMessage = 'This email is not registered.';
                break;
            case 'auth/wrong-password':
                errorMessage = 'The password is incorrect';
                break;
            case 'auth/email-exists':
                errorMessage = 'This email already exists.';
                break;
        }
        this.errorMessage = errorMessage;
    }
}
