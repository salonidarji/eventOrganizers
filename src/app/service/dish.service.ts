import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  public url_dish = 'http://localhost:3000/dish/';

  constructor(private _http: HttpClient) { }
  getAllDish() {
    return this._http.get(this.url_dish);
 }

 getDish(id: any) {
  return this._http.get(this.url_dish + id);
}
}
