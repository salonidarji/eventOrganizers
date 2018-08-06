import { Injectable } from '@angular/core';
import { EventClass } from '../shared/event-class';
import { HttpClient , HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  public url_event = 'http://localhost:3000/event/';

  constructor(private _http: HttpClient) { }


  getAllEvent() {
    return this._http.get(this.url_event);
  }

 getEvent(id: any) {
    return this._http.get(this.url_event + id);
  }

    addEvent(item: any ) {
     const headerOptions = { headers: new HttpHeaders({'Content-Type': 'Application/json'}) };
      return this._http.post(this.url_event, JSON.stringify(item), headerOptions);


    }

    deleteEvent(id) {
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'Application/json'}) };

      return this._http.delete(this.url_event + id, httpOptions);
    }
/*
    editEvent(item: EventClass) {
     const headerOptions = { headers: new HttpHeaders({'Content-Type': 'Application/json'}) };

      return this._http.put(this.url_event+item.event_id , JSON.stringify(item) , headerOptions);
    } */
}
