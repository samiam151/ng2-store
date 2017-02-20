import { Injectable } from "@angular/core";
import { Product, ProductGroup } from "./product";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response } from "@angular/http";
import { ProductService } from './product.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductFilterService {
    configs: any[]
    config: number

    constructor(
        private http: Http,
        private productService: ProductService) { }

    public getConfigurations(data) {
        // let configs: any[] = [];      
        let cleaned_data: any[] = this.clean(data)
        let unique_configs = this.getUniqueConfigs(cleaned_data)
        return unique_configs
    }

    public setCurrentConfig(currentOptions, key, value) {
        if (!currentOptions[key] || currentOptions[key] !== value) {
            currentOptions[key] = value;
        }
        return currentOptions
    }

    private clean(data: Object[]): Object[] {
        // Strip unused options
        let cleaned_data: any[] = data.map(datum => {
            let obj = {},
                keys = Object.keys(datum)
            keys.forEach(key => {
                if (datum[key] && datum[key] !== null && datum[key] !== "") {
                    obj[key] = datum[key]
                }
            })
            return obj
        })

        // Sort by SKU ascending
        let sorted_data: Object[] = cleaned_data.sort((a, b) => a['SKU'] - b['SKU'])
        return sorted_data;
    }

    private getUniqueConfigs(data: Object[]): any {
        let configs: Object = {};
        data.forEach((variant, index) => {
            let obj = {}
            Object.keys(variant).forEach(key => {
                if (!configs[key]) {
                    configs[key] = []
                }
                configs[key].push(variant[key])
            })
        })
        console.log(configs)
        return configs
    }

    public transformData(products: Object[]) {
        var transformedData = {},
            newData = [];
            
        products.map(function (product, index) {
            /*ITERATE THORUGH PRODUCTS*/
            /* ITERATE THROUGH OPTIONS */
            Object.keys(product).map(function (key, index) {

                if (key.indexOf("Option") != -1 && product[key] != null && product[key] != "") {

                    if (transformedData.hasOwnProperty(key)) {
                        if (transformedData[key].hasOwnProperty(product[key]) == false) {
                            transformedData[key][product[key]] = { name: product[key], sku: [product['SKU']]}
                        } else {
                            if (transformedData[key][product[key]]["sku"].indexOf(product['SKU']) == -1) {
                                transformedData[key][product[key]]["sku"].push(product['SKU'])
                            }
                        }
                    } else {
                        transformedData[key] = {};
                        transformedData[key][product[key]] = { name: product[key], sku: [product['SKU']] }
                    }
                }
            })
        })

        Object.keys(transformedData).map(function (key, index) {
            var i = {};
            i["name"] = key;
            i["selectedValue"] = "";
            i["options"] = Object.keys(transformedData[key]).map(function (lkey, lindex) {
                var j = {};
                j["name"] = transformedData[key][lkey]["name"];
                j["sku"] = transformedData[key][lkey]["sku"];
                j["selected"] = false;

                return j;
            });
            newData.push(i);
        });
        return newData;
    }
}