import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  data:any
constructor(private ser:OrderService){

}
get(){
 this.data=this.ser.getOrders();
 return this.data;

}

}
