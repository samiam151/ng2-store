import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private auth:AuthService, private route:Router) { }

    ngOnInit() { }

    login(form){
        this.auth.loginUser(form.username, form.password)
        if(this.auth.isAuthenticated()){
            this.route.navigateByUrl('/products')
        }
    }
}