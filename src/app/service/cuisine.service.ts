import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  public url_cuisine = 'http://localhost:3000/cuisine/';

  constructor(private _http: HttpClient) { }

  getAllCuisine() {
     return this._http.get(this.url_cuisine);
  }

  getCuisine(id) {
    return this._http.get(this.url_cuisine + id );
 }
}
