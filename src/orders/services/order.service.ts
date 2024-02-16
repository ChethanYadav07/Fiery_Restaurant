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
   return this.http.get('http://localhost:3000/order')
    
  }

  getById(id:number){
    return this.http.get('http://localhost:3000/order/'+id)
  }

  postOrder(order: Order) {
    order.order_Date = "01-01-2000"
    order.grand_Total = 1000
    order.tax_Total = 100
    order.order_Total = 900
   return this.http.post('http://localhost:3000/order', order);
  }
}
