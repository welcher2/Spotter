import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateTelephone } from '../../../Shared/telephone.validator';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { emailMatchValidator, passwordMatchValidator } from '../../../Shared/matcher';
import { AngularFireAuth } from '@angular/fire/auth';
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
    constructor(private formBuilder: FormBuilder, private afAuth: AngularFireAuth, private authService: AuthService) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            displayName: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            phoneNumber: ['', [Validators.required, ValidateTelephone]],
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
            let email = this.registerForm.get('email').value;
            let password = this.registerForm.get('password').value;
            var promise = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            promise.then(
                (user) => {
                    this.authService.user = user.user;
                },
                (error) => {
                    var errorCode = error.code;
                    if (errorCode === 'auth/email-already-in-user') {
                        this.errorMessage = "Email already in use.";
                    } else {
                        console.log(errorCode);
                    }
                }
            )
        }
    }

    private userRegister() {

    }
}
