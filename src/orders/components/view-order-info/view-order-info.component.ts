import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Order } from '../../models/order';
import { Observable } from 'rxjs';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {
  order:Order={
    id: "",
    contact_Name: '',
    order_Date: undefined,
    items_Ordered: 0,
    order_Total: 0,
    tax_Total: 0,
    grand_Total: 0,
    address: '',
    phone: '',
    items: []
  }
  constructor(private rt:ActivatedRoute,private http:OrderService){
 
    
  }
   ngOnInit(){
    let value:any
    value=localStorage.getItem("myid")
    console.log(value)
    this.http.getById(value).subscribe(data =>{
      this.order=data as Order;
    })
  
   }
    
}
