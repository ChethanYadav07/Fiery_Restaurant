import { Item } from "./item"

export class Order {
    id: string
    contact_Name: string
    order_Date: any
    items_Ordered: number
    order_Total: number
    tax_Total: number
    grand_Total: number
    address:string
    phone:string
    items:Item[]

    constructor(order_No: string,
        contact_Name: string,
        order_Date: any,
        items_Ordered: number,
        order_Total: number,
        tax_Total: number,
        grand_Total: number,
        address:string,
        phone:string) {

        this.id = order_No;
        this.items_Ordered = items_Ordered
        this.contact_Name = contact_Name
        this.order_Total = order_Total
        this.grand_Total = grand_Total
        this.tax_Total = tax_Total
        this.address=address
        this.phone=phone
        this.items = [];
    }



}
