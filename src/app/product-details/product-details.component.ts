import { Component } from '@angular/core';
import {ListItemService} from '../../services/list-item.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  itemIndex:number = 0;
  currentListItemDetails:any;
  cartCount: number = 0; // Tracks items added to cart
  constructor(private listItem: ListItemService){}
  ngOnInit(){
    this.listItem.currentItem.subscribe((data)=>{
      this.currentListItemDetails = data;
    })
  }
  addToCart() {
    this.cartCount++;
  }
}
