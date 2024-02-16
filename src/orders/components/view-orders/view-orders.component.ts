import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
  orders: Order[] = []
  constructor(private rt: Router, private orderService: OrderService) {

  }
  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data as Order[];
    })

  }

  navigate(id: any) {
    localStorage.setItem("myid", id)
    this.rt.navigate(['/orderinfo'])
  }
}
