import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { StoreService } from './service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected readonly productList$: Observable<Product>;

  constructor(storeService: StoreService) {
    this.productList$ = storeService.getAllStore();
  }
}
