import { AppConfig } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_NAME = AppConfig.jwt_token;

  constructor() { }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  

}
