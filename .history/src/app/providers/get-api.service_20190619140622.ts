import { AuthService } from './auth.service';
import { AppConfig } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  url = AppConfig.url;

  public headers: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {

    this.headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.auth.getToken());

  }

  getRealtime(company_id) {
    return this.http.get(`${this.url}/realtime/` + company_id, { headers: this.headers }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(e => {
        throw new Error(e);
      })
    );
  }


  getAllLimits(userid) {
    return this.http.get(`${this.url}/all-limits/${userid}`, { headers: this.headers }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(e => {
        throw new Error(e);
      })
    );
  }



}