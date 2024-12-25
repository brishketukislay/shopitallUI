import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  itemIndex:number = 0;
  itemDetail = new BehaviorSubject('Hello');
  currentItem = this.itemDetail.asObservable();
  updateItemDetail(newItem:any){
    this.itemDetail.next(newItem);
  }
  constructor(private http:HttpClient) { }
  getListItem():Observable<any>{
  return this.http.get('https://shopitall.onrender.com/api/items')
  }
}
