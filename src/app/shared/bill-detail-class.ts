export class BillDetailClass {
  constructor(
    public bill_details_id: number,
    public fk_dish_id: number,
    public qty: number,
    public bill_price,
    public fk_bill_no
  ) { }
}
