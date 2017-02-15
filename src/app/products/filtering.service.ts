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
        // let configs: any[] = [];      
        let cleaned_data: any[] = this.clean(data)
        let unique_configs = this.getUniqueConfigs(cleaned_data)
        return unique_configs
    }

    private clean(data: Object[]): Object[] {   
        // Strip unused options
        let cleaned_data: any[] = data.map(datum => {
            let obj = {},
                keys = Object.keys(datum)
            keys.forEach(key => { 
                if (datum[key] && datum[key] !== null && datum[key] !== ""){
                    obj[key] = datum[key]
                }
            })
            return obj
        })

        // Sort by SKU ascending
        let sorted_data: Object[] = cleaned_data.sort((a,b) => a['SKU'] - b['SKU'] )
        return sorted_data;
    }

    private getUniqueConfigs(data: Object[]): any {
        let configs: Object = {};
        data.forEach((variant, index) => {
            Object.keys(variant).forEach(key => {
                if (!configs[key]){
                    configs[key] = []
                }
                configs[key].push(variant[key])
            })
        })
        return configs
    }
}