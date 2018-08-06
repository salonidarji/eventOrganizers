import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { DishClass } from '../shared/dish-class';
import { DishService } from '../service/dish.service';
import { CuisineService } from '../service/cuisine.service';
import { BillSummaryServiceService } from '../service/bill-summary-service.service';
import { BillSummaryClass } from '../shared/bill-summary-class';
import { BillDetailClass } from '../shared/bill-detail-class';
import { BillDetailService } from '../service/bill-detail.service';


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  dishArr: DishClass[];
  searchId;
  i = 1;
  qty = 1;
  total = 0;
  itemArr: DishClass[] = [];
  qtyArr: number[] = [];
  priceArr: number[] = [];
  summaryArr: BillSummaryClass[] = [];
  date = this.datePipe.transform(Date.now() , 'dd-MM-yyyy');
  detailArr: BillDetailClass[] = [];
  flagSummary = 0;
  flagOrder = 0;
  flag = 0;
  flagDetail = 0;
  bill_no = 0;
  arr1: BillDetailClass[] = [];
  flagPast = 0;
  flagClose = 0;
  email_id = 'salonidarji3335@gmail.com';
  email_id1 = 'saloni';

  constructor(private _data: DishService,
    private _dataCuisine: CuisineService,
    private _dataSummary: BillSummaryServiceService,
    private _dataDetail: BillDetailService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {

    console.log('date =' + this.date );
    this._data.getAllDish().subscribe(
      (data: DishClass[]) => {
        this.dishArr = data;
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

  search(value) {
    console.log('search=' + value);
    this._data.getDish(value).subscribe(
      (data: DishClass[]) => {
        this.dishArr = data;
        console.log(data);
      },
      function(err) {
        alert('err= ' + err);

      },
      function() {
        console.log('dish finally');
      }


    );
  }

  onCart(item: DishClass) {
    this.flagOrder = 1;
    this.flagClose = 1;
    this.itemArr.push(item);
    this.qtyArr.push(1);
    this.priceArr.push(item.dish_price);
    this.total += item.dish_price;
     console.log(this.itemArr);
   console.log(this.qtyArr);
     console.log(this.priceArr);
  }

  updateQty(item, i) {
    this.total -= this.priceArr[i];
    this.priceArr[i] = this.qtyArr[i] * item.dish_price;
    this.total += this.priceArr[i];
  }

  onDelete(i) {
    this.itemArr.splice(i, 1);
    this.qtyArr.splice(i, 1);
    this.priceArr.splice(i, 1);
    this.total -= this.priceArr[i];
    this.total = 0;
    this.total += this.priceArr[i];

  }

  onCheckOut() {
     this.flagClose = 1;
    this._dataSummary.addSummary(new BillSummaryClass(null , this.total, this.date  , 'saloni')).subscribe(

      (x: any) => {
        this.bill_no = x.insertId;
   this.summaryArr.push(new BillSummaryClass(this.bill_no , this.total, this.date , 'saloni'));


        for (let i = 0; i < this.summaryArr.length; i++) {
          this.arr1.push(new BillDetailClass(null , this.itemArr[i].dish_id , this.qtyArr[i], this.priceArr[i] , x.insertId ));
        }
        for (let j = 0 ; j <= this.priceArr.length - 1 ; j++ ) {
          console.log('bill_no = ' + this.bill_no);
       this.detailArr.push(new BillDetailClass(null , this.itemArr[j].dish_id , this.qtyArr[j] , this.priceArr[j] , this.bill_no ));



       this.flag = 1;
       console.log('flag =' + this.flagSummary);
     }
      },
      function(err) {
        alert('error=' + err);
      },
      function() {
        console.log('summary added finaly');


      }

    );
    this.flagSummary = 1;





  }

  showDetail() {
    this.flagSummary = 0;
    this.flagDetail = 1;
    this._dataDetail.getDetail(this.bill_no).subscribe(
      (x: any) => {
        console.log(x);
      },
      function(err) {
        alert('error=' + err);
      },
      function() {
        console.log('detail displayed finaly');

      }
    );
  }

  onPastOrder() {
    this.flagPast = 1;
    this.flagClose = 1;
    this._dataSummary.getSummaryByUser(this.email_id1).subscribe(
      (x: any) => {
        this.summaryArr = x;
      },
      function(err) {
        alert('error = ' + err);
      },
      function() {
        console.log('past order finally');
      }
    );
  }

  closeAll() {
    this.flag = 0;
    this.flagDetail = 0;
    this.flagOrder = 0;
    this.flagPast = 0;
    this.flagSummary = 0;
    this.flagClose = 0;

    this.arr1 = [ ];
    this.detailArr = [ ];
    this.summaryArr = [ ];
  }
}
