import { HttpClient } from '@angular/common/http';
import { AppConfig } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_NAME = AppConfig.jwt_token;
  url = AppConfig.url;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  
  login(credentials) {
    return this.http.post(`${this.url}/login`, credentials)
    .pipe(
      tap((res: any) => {
        this.setToken(res['token']);
        this.router.navigate(['/dashboard']);
        return true;
      }),
      catchError(e => {
        if(e.error.message) {
          console.log(e.error.message);
        } else {
          console.log('로그인실패');
        }
        throw new Error(e);
      })
    );
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }
  
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }
  

}
