import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

import { ProductGroup, Product } from '../product';
import { ProductFilterService } from '../filtering.service';
import { IOptions } from './IOptions';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
    product: any
    productKeys: any[]
    options: IOptions
    optionsObj: any[]
    chosenOptions: Object = {}
    isDataAvailable: boolean = false

    constructor(
        private productService: ProductService,
        private filter: ProductFilterService,
        private route:ActivatedRoute) {  
            // Set product for detail page
            let sku = this.route.snapshot.params['sku'];
            this.productService.getProduct(sku).subscribe((data) => {
                this.product = data[0];
                this.product['imgUrl'] = "../assets/No_Image_Available.gif";
                this.productKeys = Object.keys(data[0])
                this.isDataAvailable = true;    
            }); 

            // Get posiible configurations
            this.productService.getProducts().subscribe(data => {
                this.options = this.filter.getConfigurations(data)
                this.optionsObj = Object.keys(this.filter.getConfigurations(data))                
            })  
        }

    ngOnInit() { }

    chooseOption(key, value) {
        this.chosenOptions = this.filter.setCurrentConfig(this.chosenOptions, key, value)
        console.log(this.chosenOptions);
    }
}