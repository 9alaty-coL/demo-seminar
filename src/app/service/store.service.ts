import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

const STORE_API = 'https://fakestoreapi.com'
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public constructor(private readonly httpClient: HttpClient) {}

  public getAllStore(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(STORE_API + '/products');
  }

  public getProductById(id: Product['id']): Observable<Product> {
    return this.httpClient.get<Product>(STORE_API + '/products/' + id)
  }
}
