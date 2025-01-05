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
  itemList: any[] = [];
  displayedItems: any[] = [];
  isLoading: boolean = true;
  apiFailed: boolean = false;
  categories: string[] = [];
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
        this.displayedItems = [...this.itemList];
        this.extractCategories();
      },
      error: (err) => {
        this.apiFailed = true;
        console.log('error', err);
      }
    });
  }

  extractCategories() {
    this.categories = [...new Set(this.itemList.map(item => item.category))];
  }

  filterProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;
  
    console.log(selectedCategory);
    if (!selectedCategory) {
      this.displayedItems = [...this.itemList];
    } else {
      this.displayedItems = this.itemList.filter(item => item.category === selectedCategory);
    }
  }
  
  
  sortProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    const criteria = target.value;
    if (criteria === 'price') {
      this.displayedItems.sort((a, b) => a.price - b.price);
    } else if (criteria === 'rating') {
      this.displayedItems.sort((a, b) => b.rating.rate - a.rating.rate);
    }
  }

  productDetail(index: number) {
    const selectedItem = this.displayedItems[index];
    this.listItem.updateItemDetail(selectedItem);
    this.zone.run(() => {
      this.router.navigate(['/product-detail']);
    });
  }

  ngOnDestroy() {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }
}
