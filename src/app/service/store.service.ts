import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public constructor(private readonly httpClient: HttpClient) {}

  public getAllStore(): Observable<Product> {
    return this.httpClient.get<Product>('https://fakestoreapi.com/products');
  }
}
