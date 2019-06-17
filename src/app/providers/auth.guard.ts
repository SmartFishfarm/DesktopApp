import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}

    canActivate() {
        if (!this.auth.isAuthenticated()) {
            console.log('invalid token!');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
