export interface Item {
  name: string;
  price: number;
  imgSrc: string;
  inStock: string;
}

export interface FoodList {
  drinks: Array<Item>;
  snacks: Array<Item>;
}
