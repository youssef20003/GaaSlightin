import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envo } from '../../../shared/env/envo';

@Injectable({
  providedIn: 'root'
})
export class JobArchivallService {

  constructor(private _HttpClient: HttpClient) { }


  getalljobs(token: string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._HttpClient.get(`${envo.baseurl}/api/v0/jobs` , { headers })
  }


}
