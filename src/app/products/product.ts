export class ProductGroup {
    public id: number
    public name: string
    public products: Product[]

    constructor(id: number, name: string, products: Product[]){
        this.id = id;
        this.name = name;
        this.products = products;
    }
}

export class Product {
    public id: number
    public name: string
    public inStock: boolean
    public price: number
    public color: string
    public size: string

    constructor(id: number, name: string, price: number, stock: boolean, color: string, size: string){
        this.id = id;
        this.name = name;
        this.inStock = stock;
        this.price = price;
        this.color = color;
        this.size = size;
    }
}

