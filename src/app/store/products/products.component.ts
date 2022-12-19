import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  protected readonly productList$: Observable<Product[]>;

  protected readonly isLoading$ = new BehaviorSubject(false);

  constructor(storeService: StoreService) {
    this.productList$ = storeService.getAllStore();
  }
}
