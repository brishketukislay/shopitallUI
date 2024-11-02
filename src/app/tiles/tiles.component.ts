// import { Component, NgZone } from '@angular/core';
// import {ListItemService} from '../../services/list-item.service'
// import {Router} from '@angular/router'
// // import {LoaderComponent} from '../loader/loader.component'

// @Component({
//   selector: 'app-tiles',
//   templateUrl: './tiles.component.html',
//   styleUrl: './tiles.component.scss'
// })
// export class TilesComponent {
//   itemList:any;
//   isLoading:boolean = true;
//   apiFailed:boolean = false;
//   constructor(private listItem: ListItemService, private router:Router, private zone:NgZone){}
//   ngOnInit(){
//     // this.itemList = this.http.get('https://shopitall.onrender.com/api/items');
//     this.fetchItemList();
//   }  fetchItemList(){
//   //   this.listItem.getListItem().subscribe((data)=>{
//   //     this.isLoading = false;
//   //     this.itemList = data;
//   //   },
//   // (err)=>{
//   //   // this.isLoading = false;
//   //   this.apiFailed = true;
//   //   console.log('error',err);
//   // })
//   this.listItem.getListItem().subscribe({
//     next: (data)=>{
//             this.isLoading = false;
//       this.itemList = data;
//     },
//     error:(err)=>{
//         // this.isLoading = false;
//     this.apiFailed = true;
//     console.log('error',err);
//     }
//   })
//   }
//   productDetail(index:number){
//     this.zone.run(() => { this.router.navigate(['/product-detail'], { skipLocationChange: false }) });
    
//     console.log('index',index)
//   }
// }
//************************** */
import { Component, OnDestroy, NgZone } from '@angular/core';
import { ListItemService } from '../../services/list-item.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnDestroy {
  itemList: any;
  isLoading: boolean = true;
  apiFailed: boolean = false;
  private listSubscription!: Subscription;

  constructor(
    private listItem: ListItemService,
    private router: Router,
    private zone: NgZone
  ) {}
  ngOnInit() {
    this.fetchItemList();
  }

  fetchItemList() {
    this.listSubscription = this.listItem.getListItem().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.itemList = data;
      },
      error: (err) => {
        this.apiFailed = true;
        console.log('error', err);
      }
    });
  }

  productDetail(index: number) {
    this.zone.run(() => {
      this.router.navigate(['/product-detail'], {
        queryParams: { reload: new Date().getTime() },
        replaceUrl: true
      });
    });
    console.log('index', index);
  }

  ngOnDestroy() {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }
}
