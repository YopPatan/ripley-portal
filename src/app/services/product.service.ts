import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getProduct(sku): Promise<any> {
    return this.http.get('http://localhost:3000/product/' + sku, this.getHeaders()).toPromise();
  }

  getAuth(): Promise<any> {
    return this.http.get('http://localhost:3000/auth', this.getHeaders()).toPromise();
  }

  getCatalog(): Promise<any> {
    console.log('headers', this.getHeaders());
    return this.http.get<any[]>('http://localhost:3000/product', this.getHeaders()).toPromise();
  }

  getHeaders(): any {
    let idToken = localStorage.getItem('idToken');
    if (idToken === null) {
      idToken = '';
    }
    return {
      headers: {token: idToken}
    };
  }
}
