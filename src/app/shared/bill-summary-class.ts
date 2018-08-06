export class BillSummaryClass {

  constructor(public bill_no: number,
     public bill_amount,
     public bill_date: string,
     public fk_user_id: string) {

  }
}
