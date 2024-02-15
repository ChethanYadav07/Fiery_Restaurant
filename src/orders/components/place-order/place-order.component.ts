import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {

  constructor(private ser: OrderService) {

  }
  handleSubmit(data: any) {

    this.ser.postOrder(data.value);

  }
}
