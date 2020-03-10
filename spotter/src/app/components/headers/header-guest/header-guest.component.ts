import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { User } from 'src/app/Shared/user.model';
import { faUser } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header-guest',
  templateUrl: './header-guest.component.html',
  styleUrls: ['./header-guest.component.css']
})
export class HeaderGuestComponent implements OnInit {
    faUser = faUser;
    user: User = null;
    constructor(public auth: AngularFireAuth) { }

    ngOnInit(): void {
    }

    register() {

    }

    login() {
    }

    logout() {
    }

}
