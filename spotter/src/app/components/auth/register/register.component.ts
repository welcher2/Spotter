import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { faLock, faUser, faSleigh } from '@fortawesome/free-solid-svg-icons';
import { emailMatchValidator, passwordMatchValidator, telephoneValidator } from '../../../Shared/matcher';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/Shared/Models/userinfo.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    registerForm: FormGroup;
    faLock = faLock;
    faUser = faUser;
    errorMessage:string = null;
    invalidEmail: boolean = false;
    constructor(private formBuilder: FormBuilder, private afAuth: AngularFireAuth, private authService: AuthService, private afDb: AngularFireDatabase) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            displayName: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            phoneNumber: ['', [Validators.required, telephoneValidator]],
            email: ['', [Validators.required, Validators.email]],
            confirmEmail: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        }, {validator: [emailMatchValidator, passwordMatchValidator]})
    }

    get displayName() { return this.registerForm.get('displayName'); }

    get firstName() { return this.registerForm.get('firstName'); }

    get lastName() { return this.registerForm.get('lastName'); }

    get dateOfBirth() { return this.registerForm.get('dateOfBirth'); }

    get phoneNumber() { return this.registerForm.get('phoneNumber'); }

    get email() { return this.registerForm.get('email'); }

    get confirmEmail() { return this.registerForm.get('confirmEmail'); }

    get password() { return this.registerForm.get('password'); }
    
    get confirmPassword() { return this.registerForm.get('confirmPassword'); }


    onSubmit() {
        if (this.registerForm.valid) {
            this.handleSignUp();
            if(this.authService.user) {
                // Navigate to phone verification
                this.commitUserToDB();
            }
        }
        return;
    }


    private handleSignUp(): void {
        var email = this.email.value;
        var password = this.password.value;
        var promise = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        promise.then(
            (user) => {
                this.authService.user = user.user;
                if (this.displayName.value) {
                    let displayNameValue: string = this.displayName.value;

                    //Check if two names were entered
                    let twoWords: boolean = displayNameValue.indexOf(' ') == -1 ? false : true;

                    //Trim to first word if two names were entered
                    if (twoWords) {
                        displayNameValue = displayNameValue.substr(0, displayNameValue.indexOf(' ') + 1);
                    }
                    
                    let profile = {
                        displayName: this.displayName.value + " " + this.lastName.value
                    };
                    //Update the user profile displayName on firebase
                    user.user.updateProfile(profile).then(
                        () => {
                            console.log("Display name updated: " + profile.displayName);
                        }, 
                        //Retry updating the user display name if the intial call fails, do this 3 times before quitting
                        retry(3)
                    );
                } else {
                    let profile = {
                        displayName: this.firstName + " " + this.lastName
                    };
                    user.user.updateProfile(profile).then(
                        () => {
                            console.log("Display name updated.");
                        },
                        retry(3)
                    );
                }

            },
            (error) => {
                var errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    this.errorMessage = "Email already in use.";
                    this.invalidEmail = true;
                } else {
                    console.log(errorCode);
                    this.invalidEmail = false;
                }
            }
        )
    }

    private commitUserToDB() {
        let userInfo: UserInfo = new UserInfo(
            this.firstName.value + ' ' + this.lastName.value, 
            this.email.value, 
            this.stripPhoneNumber(this.phoneNumber.value),
            this.dateOfBirth.value
        );
        let uid = this.authService.user.uid;
        const userRef = this.afDb.object('users/' + uid);
        userRef.set({
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone,
            dob: userInfo.dob, 
            vehicle: false,
            address: false,
            emailVerified: false,
            phoneVerified: false
        });
        

    }

    stripPhoneNumber(phoneNumber: string): string {
        let newPhoneNumber: string = '';
        newPhoneNumber += '+1' + phoneNumber.substr(1, 3) + phoneNumber.substr(6, 3) + phoneNumber.substr(10, 4);
        return newPhoneNumber;
    }
}
