export class Product {
    id: number
    name: string
    inStock: boolean
    price: number
    color: string
    sizesAvailable: string[]

    constructor(id: number, name: string, stock: boolean, price: number, color: string, sizes: string[]){
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = stock;
        this.color = color;
        this.sizesAvailable = sizes;
    }
}

