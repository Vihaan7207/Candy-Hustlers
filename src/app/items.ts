import { FoodList } from "./interfaces";

export const ITEMS: FoodList = {
  drinks: [
    {
    name: 'Blue Gatorade',
    price: 3.00,
    imgSrc: '/assets/images/blue-bottle.jpg',
    inStock: 'true'
  },
  {
    name: 'Red Gatorade',
    price: 3.00,
    imgSrc: '/assets/images/red-bottle.jpg',
    inStock: 'false'
  }
],
  snacks: [
    {
    name: 'Cheetos',
    price: 5.00,
    imgSrc: '/assets/images/cheetos-bag.png',
    inStock: 'false'
  },
    {
    name: 'Orbit Winter Mint',
    price: 4.00,
    imgSrc: '/assets/images/orbit-winter-mint.webp ',
    inStock: 'true'
  },
]
}
