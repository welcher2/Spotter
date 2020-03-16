import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const emailMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
        const email = control.controls['email'];
        const confirmEmail = control.controls['confirmEmail'];
    return email && confirmEmail && email.value === confirmEmail.value ? null : { 'emailsNotEqual': true };
}


export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.controls['password'];
    const confirmPassword = control.controls['confirmPassword'];
    return password && confirmPassword && password.value === confirmPassword.value ? null : { 'passwordsNotEqual': true };
}