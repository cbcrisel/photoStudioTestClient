import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public _http: HttpClient,
    private _requestService: RequestService= new RequestService(_http)
  ) { }

  login(user:User): Observable<any>{
    return this._requestService.post('login',user);
  }
}
