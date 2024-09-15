import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor(private http:HttpClient) { }
  getListItem():Observable<any>{
  return this.http.get('https://shopitall.onrender.com/api/items')
  }
}
