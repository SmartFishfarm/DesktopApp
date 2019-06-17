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
  COMPANY_ID = AppConfig.company_id;
  url = AppConfig.url;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  login(credentials) {
    return this.http.post(`${this.url}/auth/login`, credentials)
    .pipe(
      tap((res: any) => {
        this.setToken(res['token']);
        this.setCompanyId(res['company_id']);
        this.router.navigate(['/home']);
        return true;
      }),
      catchError(e => {
        /*
        if(e.error.message) {
          console.log(e.error.message);
        } else {
          console.log('로그인실패');
        }
        */
        throw new Error(e);
      })
    );
  }

  logout(): void {
    this.removeToken();
    this.removeCompanyId();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
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

  setCompanyId(_id: string): void {
    localStorage.setItem(this.COMPANY_ID, _id);
  }

  getCompnayId(): string {
    return localStorage.getItem(this.COMPANY_ID);

  }

  removeCompanyId() {
    localStorage.removeItem(this.COMPANY_ID);
  }
  
  

}
