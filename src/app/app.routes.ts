import { Routes } from '@angular/router';
import { HomepageComponent } from '../orders/components/homepage/homepage.component';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';

import { ViewOrderInfoComponent } from '../orders/components/view-order-info/view-order-info.component';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';

export const routes: Routes = [

    {path:'',component:HomepageComponent},
    {
        path:'vieworders',loadComponent:()=>import('../orders/components/view-orders/view-orders.component').then((r)=>r.ViewOrdersComponent)
    },
    {
        path :'orderform',loadComponent:()=>import('../orders/components/place-order/place-order.component').then((r)=>r.PlaceOrderComponent)
    },
    {
        path:'orderinfo',loadComponent:()=>import('../orders/components/view-order-info/view-order-info.component').then((r)=>r.ViewOrderInfoComponent)
    }

];
