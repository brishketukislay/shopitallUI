import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListItemService} from '../../services/list-item.service'

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent {
  itemList:any;
  constructor(private http:HttpClient, private listItem: ListItemService){}
  ngOnInit(){
    // this.itemList = this.http.get('https://shopitall.onrender.com/api/items');
    this.fetchItemList();
  }
  fetchItemList(){
    this.listItem.getListItem().subscribe((data)=>{
      this.itemList = data;
    },
  (err)=>{
    console.log('error',err);
  })
  }
}
