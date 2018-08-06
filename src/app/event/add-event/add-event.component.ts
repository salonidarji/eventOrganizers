import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { EventDataService } from '../../service/event-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _dataEvent: EventDataService,
    private router: Router) { }

  ngOnInit() {

    this.eventForm = new FormGroup({
      'event_name': new FormControl(''),
      'event_type': new FormControl(''),
      'event_price': new FormControl('')
    });

  }


 /* selectedFile: File = null;
  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(this.selectedFile);
  }
    */

   onSubmit() {

    console.log(this.eventForm);
    const fd = new FormData;

    fd.append('event_id', null);
    alert('name is =' + this.eventForm.value.event_name);
    fd.append('event_name', this.eventForm.value.event_name);

    fd.append('event_type', this.eventForm.value.event_type);
    fd.append('event_price', <any> this.eventForm.value.event_price);
    console.log('fd=' + fd.get('event_name'));
    this._dataEvent.addEvent(fd).subscribe(
      (x: any) => {
        alert('Event Added Successfully');
        console.log(x);
        this.router.navigate(['/event']);
      },
      function(err) {
        alert('error: ' + err);
      },
      function() {
        console.log('add Event finally');
      }
    );
  }

}

