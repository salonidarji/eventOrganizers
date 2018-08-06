import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillDetailService {

  public url_detail = 'http://localhost:3000/detail/';

  constructor(private _http: HttpClient) { }


  getDetail(id) {
    return this._http.get(this.url_detail + id );
  }


 addDetail(item) {
   const headerOptions = { headers: new HttpHeaders({'Content-Type': 'Application/json'}) };
   return this._http.post(this.url_detail, JSON.stringify(item), headerOptions );
 }

}
