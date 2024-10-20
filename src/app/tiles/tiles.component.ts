import { Component } from '@angular/core';
import {ListItemService} from '../../services/list-item.service'
import {Router} from '@angular/router'
// import {LoaderComponent} from '../loader/loader.component'

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent {
  itemList:any;
  isLoading:boolean = true;
  apiFailed:boolean = false;
  constructor(private listItem: ListItemService, private router:Router){}
  ngOnInit(){
    // this.itemList = this.http.get('https://shopitall.onrender.com/api/items');
    this.fetchItemList();
  }  fetchItemList(){
  //   this.listItem.getListItem().subscribe((data)=>{
  //     this.isLoading = false;
  //     this.itemList = data;
  //   },
  // (err)=>{
  //   // this.isLoading = false;
  //   this.apiFailed = true;
  //   console.log('error',err);
  // })
  this.listItem.getListItem().subscribe({
    next: (data)=>{
            this.isLoading = false;
      this.itemList = data;
    },
    error:(err)=>{
        // this.isLoading = false;
    this.apiFailed = true;
    console.log('error',err);
    }
  })
  }
  productDetail(index:number){
    this.router.navigate(['/product-detail']);
    console.log('index',index)
  }
}