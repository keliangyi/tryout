import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit(): void {
    }

    handleLogin() {
        this.auth.login()
    }

}
