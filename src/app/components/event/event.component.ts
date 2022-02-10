import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventid:any;
  photos:[];
  constructor(
    private route:ActivatedRoute,
    private _eventService:EventService
  ) { 
    this.photos=[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{
      const {params}=paramMap
      console.log(params.id);
      this.eventid=params.id;
    });

    this.getPhotos();
    
  }
  getPhotos(){
    this._eventService.getPhotosByEvent(this.eventid).subscribe(
      Response=>{
        this.photos=Response
        console.log(this.photos);
      }
    )
  }
}
