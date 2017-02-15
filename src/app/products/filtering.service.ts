import { Injectable } from "@angular/core";
import { Product, ProductGroup } from "./product";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response } from "@angular/http";
import { ProductService } from './product.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductFilterService {
    // This should return an array of 

    configs: any[]

    constructor(
        private http: Http,
        private productService: ProductService) { }

    public getConfigurations(data){
        let configs: any[] = [];      
        configs = this.clean(data)
        configs = this.getUniqueConfigs(data)
        return configs
    }

    private clean(data: Object[]): Object[] {
        let cleaned_data: any[]
        cleaned_data = data.map(datum => {
            let obj = {},
                keys = Object.keys(datum)
            keys.forEach(key => { if (datum[key]){ obj[key] = datum[key] } })
            return obj
        })
        return cleaned_data;
    }

    private getUniqueConfigs(data: Object[]): Object[] {
        data.forEach(variant => {
            console.log(variant);
        })
        return data
    }
}