import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CuisineClass } from '../../shared/cuisine-class';
import { CuisineService } from '../../service/cuisine.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() myEvent = new EventEmitter<string>();
  cuisineArr: CuisineClass[];
  constructor(private _data: CuisineService) { }

  ngOnInit() {

    this._data.getAllCuisine().subscribe(
      (data: CuisineClass[]) => {
        this.cuisineArr = data;
        console.log(data);
      },
      function(err) {
        alert('err= ' + err);

      },
      function() {
        console.log('cuisine finally');
      }


    );

  }

  onDish(id) {
    this.myEvent.emit(id);
  }

}
