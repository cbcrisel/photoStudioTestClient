import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Constants } from '../Constants';
import { Utils } from '../Utils';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private headers = new HttpHeaders;
  private url= "http://localhost:3000/api/"
  constructor(private _http: HttpClient) { }

  get(prefixUrl: string): Observable<any>{
    this.setHeaders();
    return this._http.get(this.url+prefixUrl,{headers:this.headers});
  }
  setHeaders(){
    this.headers=new HttpHeaders()
    .set('Authorization',  Utils.get(Constants.ACTUAL_ACCESS_TOKEN)??'');
  }
  post(prefixUrl: string, params: any = null): Observable<any> {
    this.setHeaders();
    return this._http.post(
      this.url + prefixUrl,
      params,
      { headers: this.headers }
    );
  }
  delete(prefixUrl: string, params: any = null): Observable<any> {
    this.setHeaders();
    return this._http.delete(
      this.url + prefixUrl,
      {headers: this.headers}
    );
  }
}
