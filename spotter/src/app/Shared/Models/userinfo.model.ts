export class UserInfo {
    name: string;
    email: string;
    phone: string;
    dob: string;

    constructor(private _name: string, private _email: string, private _phone: string, private _dob: string) { 
        this.name = _name;
        this.email = _email;
        this.phone = _phone;
        this.dob = _dob;
    }
}