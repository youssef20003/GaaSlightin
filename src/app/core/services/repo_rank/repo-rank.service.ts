import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envo } from '../../../shared/env/envo';

@Injectable({
  providedIn: 'root'
})
export class RepoRankService {

  constructor(private _HttpClient: HttpClient) { }

  getreposranke():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('Accesstoken')}`
    });
    
    return this._HttpClient.get(`${envo.baseurl}/api/v0/github/repo/rank` , {headers})
  }

  rankrepo( repo_name: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('Accesstoken')}`
    });
    return this._HttpClient.get(`${envo.baseurl}/api/v0/github/${repo_name}/complexity` , {headers})
  }



}
