import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Constants } from 'src/app/Constants';
import { EventService } from 'src/app/services/events/event.service';
import { Utils } from 'src/app/Utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  events:any[];
  token:any;
  logged:boolean;
  constructor(
    private router:Router,
    private _eventService:EventService
  ) {
    this.events=[];
    this.token=Utils.get(Constants.ACTUAL_ACCESS_TOKEN);
    this.logged=this.token!=null;
  }
  
  ngOnInit(): void {
    this.getMyEvents();
  }

  closeSession(){
    Utils.deleteAll();
    location.reload();
  }
  getMyEvents(){
    this._eventService.getMyEvents().subscribe(
      Response=>{
        this.events=Response;
      }
    )
  }
  goToEvent(Event:MouseEvent,eventID:any){
    let newRoute='event/' + eventID;
    this.router.navigate([newRoute]);
  }
}
