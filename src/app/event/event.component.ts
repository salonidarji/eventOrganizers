import { Component, OnInit } from '@angular/core';
import { EventClass } from '../shared/event-class';
import { EventDataService } from '../service/event-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  allEvent: EventClass[] = [];
  tempEvent: EventClass[];
  constructor(private _dataEvent: EventDataService, private _router: Router) { }

  ngOnInit() {

    this._dataEvent.getAllEvent().subscribe(

      (data: EventClass[]) => {

      this.allEvent = data;
        console.log(data);
      },
      function(err) {
        alert(err);
      },
      function() {
        console.log('get All Finaly');
      }

      );
     }

     onUser() {
       this._router.navigate(['/users']);
     }

     onAddEvent() {
      this._router.navigate(['/addEvent']);

     }

     
     getEvent(id) {
       this._dataEvent.getEvent(id).subscribe(
         (data: EventClass[]) => {
           this.tempEvent = this.allEvent;
           this.allEvent = data;
         },
         function(err) {
           alert(err);
         },
         function() {
           console.log('get One Event Finaly');
         }
       );
     }

     showAll() {
        this.allEvent = this.tempEvent;
     }

    /* InsertEvent(item) {
         this._dataEvent.addEvent(item).subscribe(
            (data: EventClass[]) => {
              this.allEvent = data;
         });
       }
    */

      deleteEvent(id) {
       this._dataEvent.deleteEvent(id).subscribe(
          (data: EventClass[]) => {
            this.allEvent = data;
        },
        function(err) {
          alert(err);
        },
        function() {
          console.log('event delete finaly');
        }

      );
      }
 }


