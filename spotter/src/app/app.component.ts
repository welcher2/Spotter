import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
    title = 'spotter';
    loggedin:boolean = false;
    loginSelected: boolean = false;
    private showLogin: Subscription;

    constructor(private authService: AuthService){}

    ngOnInit() {
        this.showLogin = this.authService.loginSelected.subscribe(
            (login: boolean) => {
                this.loginSelected = login;
            }
        );
    }

    ngOnDestroy(): void {
        this.showLogin.unsubscribe();
    }
}
