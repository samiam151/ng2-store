import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Subject } from 'rxjs/RX';

@Injectable()
export class ProductService {
    getProducts() {
        // return PRODUCTS;
        let subject = new Subject()
        setTimeout(() => {
            subject.next(PRODUCTS);
            subject.complete();
        }, 10)
        return subject
    }
    getProduct(id:number){
        return PRODUCTS[id - 1] 
    }
}

const PRODUCTS = [
    new Product(1, "Men's Dallas Cowboys Dez Bryant Nike Navy Blue Team Color Game Jersey", true, 99.99, "Navy", ["XXS", "S", "M", "XXL"]),
    new Product(2, "Men's Washington Redskins Alfred Morris Nike Red Team Color Game Jersey", true, 39.99, "Crimson", ["S", "M", "XXL"]),
    new Product(3, "Men's Dallas Cowboys Ezekiel Elliot Nike Red Team Color Game Jersey", true, 99.99, "Navy", ["S", "M", "L", "XXL"])
];