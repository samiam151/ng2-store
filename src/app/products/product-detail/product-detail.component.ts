import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

import { ProductGroup, Product } from '../product';
import { ProductFilterService } from '../filtering.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
    @Input() products: Object[]

    product: any
    all_products: any[]
    productKeys: any[]
    configs: any[]
    matchingProducts: Product[]
    isDataAvailable: boolean = false

    constructor(
        private productService: ProductService,
        private filter: ProductFilterService,
        private route:ActivatedRoute) {  
            this.configs = this.filter.getConfigurations()
        }

    ngOnInit() {     
        let sku = this.route.snapshot.params['sku'];
        this.productService.getProduct(sku).subscribe((data) => {
            this.product = data[0];
            this.product['imgUrl'] = "../assets/No_Image_Available.gif";
            // this.configs = this.filter.getConfigurations()
            this.productKeys = Object.keys(data[0])
            this.isDataAvailable = true;    
            console.log(this.configs) 
        }); 
       
    }  
}