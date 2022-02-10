import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public files:any
  eventid:any;
  constructor(
    private route:ActivatedRoute,
    private _eventService: EventService,
    private router:Router
  ) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{
      const {params}=paramMap
      console.log(params.id);
      this.eventid=params.id;
    });
  }

  upload(event:any){
    const file=event.target.files[0];
    this.files=file
    
  }

  uploadFile() {
    
       const data= new FormData();
      data.append('file',this.files);
      data.append('id_social_event',this.eventid);
      this._eventService.postPhoto(data).subscribe(
      Response=>{
        console.log(Response);
      }
    ) 
    let newRoute='event/' + this.eventid;
    this.router.navigate([newRoute]);

    
    
  }


}
