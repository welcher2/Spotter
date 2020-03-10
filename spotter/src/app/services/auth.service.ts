import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'path';
import { reject } from 'q';
import { User } from '../Shared/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user: User = null;
    constructor(private afAuth: AngularFireAuth) { }

    onGoogleLogin() {
        
    }

  
}
