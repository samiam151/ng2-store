import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

import { ProductGroup, Product } from '../product';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
    product: any
    products: any[]
    productKeys: any[]
    configs: any[]
    matchingProducts: Product[]
    isDataAvailable: boolean = false

    constructor(
        private productService: ProductService,
        private route:ActivatedRoute) { }

    ngOnInit() {     
        let sku = this.route.snapshot.params['sku'];
        this.productService.getProduct(sku).subscribe((data) => {
            this.product = data[0];
            this.product['imgUrl'] = "../assets/No_Image_Available.gif";
            this.configs = this.getConfigurations()
            this.productKeys = Object.keys(data[0])
            this.isDataAvailable = true;            
        }); 
    }

    private getConfigurations(){
        this.productService.getProducts().subscribe((data) => {
            data.map
        });
        return this.configs;
    }

    returnMatchingProducts(option, receivedOption) {
        // this.config[option] = receivedOption;

        // let matchingProducts = this.p_group.products.filter(product => {
        //     return product[option] == receivedOption;
        // });
        // this.matchingProducts = matchingProducts;
    }
}