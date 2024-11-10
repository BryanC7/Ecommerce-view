import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private PRODUCTS_URL = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.httpClient.get<any>(this.PRODUCTS_URL).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }
}