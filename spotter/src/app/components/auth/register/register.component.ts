import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { emailMatchValidator, passwordMatchValidator, telephoneValidator } from '../../../Shared/matcher';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/services/auth.service';

export class Registration {
    public displayName: string;
    public email: string;
    public phoneNumber: string;
    public providerId: string;
    public Uid:string;
    public emailVerified:boolean;

    constructor(public _displayName: string, public _email: string, public _phoneNumber: string, public _photoUrl?:string, 
        public _providerId?:string, public _Uid?:string, public _emailVerified?:boolean) 
        {
            this.Uid = _Uid;
            this.displayName = _displayName;
            this.email = _email;
            this.phoneNumber = _phoneNumber;
        }
}

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
            var email = this.email.value;
            var password = this.password.value;
            var promise = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            promise.then(
                (user) => {
                    this.authService.user = user.user;
                    var uid = user.user.uid;
                    if (this.displayName.value) {
                        let profile = {
                            displayName: this.displayName.value + " " + this.lastName
                        };
                        user.user.updateProfile(profile).then(
                            () => {
                                console.log("Display name updated.");
                            }, 
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
    }
}
