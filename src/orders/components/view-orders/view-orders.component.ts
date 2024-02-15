import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
  data1: any
  constructor(private service: HttpClient, private rt: Router) {
  }
  ngOnInit() {
    let result: any
    this.service.get('http://localhost:3000/order').subscribe(data => {
      result = data;
      this.data1 = data;
    })

  }

  navigate(id:any) {
    console.log(id);
    this.rt.navigate(['/orderinfo'], id)
  }
}
