import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    public _http: HttpClient,
    private _requestService: RequestService= new RequestService(_http)
  ) { }

  getMyEvents():Observable<any>{
    return this._requestService.get('events');
  }

  getPhotosByEvent(SocialEventId:number):Observable<any>{
    return this._requestService.get('photosByEvent/'+SocialEventId);
  }

  postPhoto(formData:any):Observable<any>{
    console.log(formData);
    return this._requestService.post('photo',formData)
  }
}
