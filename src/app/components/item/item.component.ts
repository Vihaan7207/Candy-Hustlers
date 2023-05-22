import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() price!: string;
  @Input() inStock!: string | boolean;

  checkInStock(): boolean {
    if (this.inStock === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

}
