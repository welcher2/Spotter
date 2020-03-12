import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateTelephone } from '../../../Shared/telephone.validator';
import { matchOtherValidator } from '../../../Shared/matchOther.validator';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    registerForm: FormGroup;
    faLock = faLock;
    faUser = faUser;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            preferredName: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            phoneNumber: ['', [Validators.required, ValidateTelephone]],
            email: ['', [Validators.required, Validators.email]],
            confirmEmail: ['', [Validators.required, Validators.email, matchOtherValidator('email')]],
            password: ['', [Validators.minLength(6), Validators.required]],
            confirmPassword: ['', [Validators.minLength(6), Validators.required, matchOtherValidator('password')]]
        })
    }

    verifyPhone() {
        
    }



}
