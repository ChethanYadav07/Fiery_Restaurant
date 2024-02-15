export class Item {

    item_No: number
    item_Name: string
    item_quantity: number
    item_price: number

    constructor(item_No: number,
        item_Name: string,
        item_quantity: number,
        item_price: number) {
        this.item_Name = item_Name
        this.item_No = item_No
        this.item_price = item_price
        this.item_quantity = item_quantity
    }
}
