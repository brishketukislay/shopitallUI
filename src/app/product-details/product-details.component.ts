import { Component } from '@angular/core';
import {ListItemService} from '../../services/list-item.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  itemIndex:number = 0;
  constructor(private listItem: ListItemService){}
  ngOninit(){
    this.itemIndex = this.listItem.itemIndex;
    console.log('list service', this.listItem.itemIndex);
  }
}
