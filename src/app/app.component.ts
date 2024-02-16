import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../orders/components/header/header.component';
import { FooterComponent } from '../orders/components/footer/footer.component';
import { ViewOrderInfoComponent } from '../orders/components/view-order-info/view-order-info.component';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';
import { OrderService } from '../orders/services/order.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,
    RouterLink,ViewOrderInfoComponent,PlaceOrderComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fiery_Restaurant';
}
