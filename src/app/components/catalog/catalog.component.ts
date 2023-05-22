import { Component } from '@angular/core';
import { ITEMS } from 'src/app/items';
import { FoodList } from 'src/app/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  items: FoodList = ITEMS;
}
