import { Component } from '@angular/core';
import {ListItemService} from '../../services/list-item.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(private listItem: ListItemService){}
  ngOninit(){
    console.log('list service', this.listItem.itemIndex);
  }
}
