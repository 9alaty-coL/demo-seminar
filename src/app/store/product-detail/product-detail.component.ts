import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  protected readonly productDetails$: Observable<Product>;

  constructor(storeService: StoreService, activatedRoute: ActivatedRoute) {
    const productId = activatedRoute.snapshot.paramMap.get('id');
    this.productDetails$ = storeService.getProductById(productId ?? '')
  }
}
