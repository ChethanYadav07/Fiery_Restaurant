import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Order } from '../../models/order';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  items: any
  autoId = "5";
  orderDetails: Order = {
    id: this.autoId,
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
  constructor(private service: OrderService) {

  }
  handleSubmit(formData: NgForm) {
    console.log(formData.value.contact_Name)
    console.log(this.orderDetails)
    this.orderDetails.address = formData.value.address
    this.orderDetails.phone = formData.value.phone
    this.orderDetails.contact_Name = formData.value.contact_Name
    this.service.postOrder(this.orderDetails).subscribe(data => {
      console.log(data);
    })
    let selectTag1 = document.getElementById('select');
    console.log(selectTag1);
    
  }
  
  
  



}
