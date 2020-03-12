import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
    loginForm: FormGroup;
    isSubmitted = false;
    errorMessage: string;
    error: boolean;

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    loginEmailPasswordAuth() {
        this.isSubmitted = true;
        if(this.loginForm.invalid) {
            return;
        }
        var email: string = this.formControls.email.value;
        var password: string = this.formControls.password.value;
        this.authService.loginEmailPassword(email, password);
        if(!this.authService.errorMessage !== null) {
            this.errorMessage = this.authService.errorMessage;
            this.error = true;
        }
    }

    googleSignIn() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.loginWithGoogle();
    }

    get formControls() {
        return this.loginForm.controls;
    }

    exitLogin() {
        this.authService.loginSelected.next(false);
    }

}
