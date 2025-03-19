import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envo } from '../../../shared/env/envo';
import { env } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }


  authwithgithub(): void {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${envo.client_id}`
  }

  getaccesstoken(code: string): Observable<any> {
    return this._HttpClient.get(`${envo.baseurl}/api/v0/auth/github?code=${encodeURIComponent(code)}`)
  }

  getuserdata(token : string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._HttpClient.get(`${envo.baseurl}/api/v0/profile` , { headers })
  }
}
