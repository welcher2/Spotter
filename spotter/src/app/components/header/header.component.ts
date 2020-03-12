import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/Shared/user.model';
import { faUser, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faStar, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    faUser = faUser;
    user: User = null;
    loggedIn: boolean = false;
    faUserCircle = faUserCircle;
    faStar = faStar;
    faAngleDown = faAngleDown;
    dropdownSelected = false;
    

    constructor(public auth: AngularFireAuth, public authService: AuthService) { }

    ngOnInit(): void {
        this.auth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        });
    }

    logout() {
        this.authService.logout();
        this.dropdownSelected = false;
    }

    selectLogin() {
        this.authService.loginSelected.next(true);
    }

}
