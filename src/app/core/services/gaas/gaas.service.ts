import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envo } from '../../../shared/env/envo';

@Injectable({
  providedIn: 'root'
})
export class GaasService {

  constructor(private _HttpClient: HttpClient) { }


  makepost(token: string, repo_name: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._HttpClient.get(`${envo.baseurl}/api/v0/github/${repo_name}/post` , {headers})
  }


  getallrepos():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('Accesstoken')}`
    });
    
    return this._HttpClient.get(`${envo.baseurl}/api/v0/github/repos` , {headers})
  }
  
  getallpost():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('Accesstoken')}`
    });
    return this._HttpClient.get(`${envo.baseurl}/api/v0/posts` , {headers})
  }
  

  getapost(id : string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('Accesstoken')}`
    });
    return this._HttpClient.get(`${envo.baseurl}/api/v0/posts/${id}`,  {headers})
  }

}
