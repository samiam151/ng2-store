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
    }
}