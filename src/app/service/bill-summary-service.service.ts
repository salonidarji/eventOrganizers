import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillSummaryServiceService {

  public url_summary = 'http://localhost:3000/summary/';

  constructor(private _http: HttpClient) { }


  getAllSummary() {
    return this._http.get(this.url_summary);
 }

 getSummaryByUser(id) {
   return this._http.get(this.url_summary + id );
}

  addSummary(item) {
    const headerOptions = { headers: new HttpHeaders({'Content-Type': 'Application/json'}) };
    return this._http.post(this.url_summary, JSON.stringify(item), headerOptions );
  }

}
