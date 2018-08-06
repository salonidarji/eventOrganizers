export class DishClass {

  constructor(
    public dish_id: number,
    public dish_name: string,
    public dish_price: number,
    public dish_img: string,
    public fk_cuisine_id: number
  ) {
  }
}


