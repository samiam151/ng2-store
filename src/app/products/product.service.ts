import { Injectable } from "@angular/core";
import { Product, ProductGroup } from "./product";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private url = "../../data.json"
    constructor(private http: Http) {}

    getProducts(): Observable<any> {
        // return PRODUCT_GROUP;        
        // let subject = new Subject<any>()
        // setTimeout(() => {
        //     subject.next(prods);
        //     subject.complete();
        // }, 0)
        // return subject
        return this.http.get(this.url).map(data => this.parseData(data));
    }
    getProduct(sku: any){
        return this.http.get(this.url).map(data => this.filterForProduct(data, sku));
    }

    private parseData(res: Response){
        let body = res.json();
        return body.variants || {};
    }

    private filterForProduct(res: Response, sku: number){
        let body = res.json();
        return body.variants.filter(datum => {
            return datum.SKU === sku;
        }) || {};
        // return data.map(datum => datum).filter(datum => datum.SKU === sku)
    }
}

// const PRODUCT_GROUP: ProductGroup[] = makeGroup();
// function makeGroup(): ProductGroup[]{
//     let group1 = new ProductGroup(1, 'Mens Dez Bryant Cowboys Jersey', [
//         new Product(1, 'Mens Dez Bryant Cowboys Jersey Small White', 96.99, true, 'White', 'S'),
//         new Product(2, 'Mens Dez Bryant Cowboys Jersey Medium White', 98.99, true, 'White', 'M'),
//         new Product(3, 'Mens Dez Bryant Cowboys Jersey Large White', 59.99, true, 'White', 'L'),
//         new Product(4, 'Mens Dez Bryant Cowboys Jersey Small Blue', 94.99, true, 'Blue', 'S'),
//         new Product(5, 'Mens Dez Bryant Cowboys Jersey Large Blue', 993.99, true, 'Blue', 'L')
//     ]);
//     let group2 = new ProductGroup(2, 'Mens Washington Redskins Alfred Morris', [
//         new Product(6, 'Mens Washington Redskins Alfred Morris Small White', 78.99, true, 'White', 'S'),
//         new Product(7, 'Mens Washington Redskins Alfred Morris Large Blue', 79.99, true, 'Blue', 'L')
//     ]);
//     let group3 = new ProductGroup(3, 'Mens Dallas Cowboys Ezekiel Elliot', [
//         new Product(8, 'Mens Dallas Cowboys Ezekiel Elliot Small White', 139.99, true, 'White', 'S'),
//         new Product(9, 'Mens Dallas Cowboys Ezekiel Elliot Medium White', 129.99, true, 'White', 'M'),
//         new Product(10, 'Mens Dallas Cowboys Ezekiel Elliot Large White', 1000.99, true, 'White', 'L'),
//         new Product(11, 'Mens Dallas Cowboys Ezekiel Elliot Large Blue', 349.99, true, 'Blue', 'L')
//     ]);

//     return [group1, group2, group3].map(group => group);
// }

// const PRODUCTS: Product[] = [
//     new Product(1, "Men's Dallas Cowboys Dez Bryant Nike Navy Blue Team Color Game Jersey", true, 99.99, "Navy", ["XXS", "S", "M", "XXL"]),
//     new Product(2, "Men's Washington Redskins Alfred Morris Nike Red Team Color Game Jersey", true, 39.99, "Crimson", ["S", "M", "XXL"]),
//     new Product(3, "Men's Dallas Cowboys Ezekiel Elliot Nike Red Team Color Game Jersey", true, 99.99, "Navy", ["S", "M", "L", "XXL"]),
//     new Product(3, "Men's Minnesota Vikings Randy Moss Game Jersey", true, 99.99, "Navy", ["S", "M", "L", "XXL"]) 
// ];
 