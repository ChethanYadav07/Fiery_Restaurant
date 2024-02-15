import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {
  id:any
  order:any
  constructor(private rt:ActivatedRoute,private http:HttpClient){
      // this.id=this.rt.snapshot.params['id'];
  }
   ngOnInit(){
    let value:any
    value=this.rt.snapshot.params['id'];
    this.http.get(`http://localhost:3000/order/${value}`).subscribe(data => {
      console.log(data);
      this.order=data;
    })
   }
    
}
