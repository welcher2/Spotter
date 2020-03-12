import { AbstractControl } from '@angular/forms';

const regex = / [(][0-9][0-9][0-9][)][ ][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9] /;
export function ValidateTelephone(control: AbstractControl) {
    return regex.test(control.value) ? null : { validTelephone: true };
}