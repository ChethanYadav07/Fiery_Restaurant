import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {

  }
  getOrders() {
    this.http.get('http://localhost:3000/order').subscribe(data => console.log(data)
    )
  }

  postOrder(order: Order) {
    this.http.post('http://localhost:3000/order', order).subscribe();
  }
}
