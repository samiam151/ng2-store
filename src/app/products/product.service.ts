import { Injectable } from "@angular/core";
import { Product, ProductGroup } from "./product";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private url = "../../assets/data.json"
    constructor(private http: Http) {}

    getProducts(): Observable<any> {    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.get(this.url, options).map(data => this.parseData(data));
    }
    getProduct(sku: any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.get(this.url).map(data => this.filterForProduct(data, sku));
    }

    getProductFromConfigs(configs: Object){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.get(this.url).map(data => this.filterForConfig(data, configs));
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

    private filterForConfig(res: Response, configs: Object){
        let body = res.json();
        return body.variants.filter(product => {
            let chosenProduct: any = null

            
            Object.keys(configs).forEach(option => {
                if (product[option] === configs[option]){
                    chosenProduct = product
                }
            })
            return chosenProduct
        }) || {};
    }
}