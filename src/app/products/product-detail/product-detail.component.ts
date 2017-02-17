import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/RX';

import { ProductGroup, Product } from '../product';
import { ProductFilterService } from '../filtering.service';
import { IOptions } from './IOptions';
import { ShoppingCartService } from '../../shoppingcart/shoppingcart.service';

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
        private cart: ShoppingCartService,
        private route: ActivatedRoute) {  
            // Set product for detail page
            let sku = this.route.snapshot.params['sku'];
            this.productService.getProduct(sku).subscribe((data) => {
                this.product = data[0];
                this.product['imgUrl'] = "../assets/No_Image_Available.gif";
                this.productKeys = Object.keys(data[0])
                this.isDataAvailable = true;    
            });            
        }

    ngOnInit() {
        // Get posiible configurations
        this.productService.getProducts().subscribe(data => {
            this.options = this.filter.getConfigurations(data)
            this.optionsObj = Object.keys(this.filter.getConfigurations(data))                
        }) 
     }

    public chooseOption(key, value, e): void {
        if (value){
            this.chosenOptions = this.filter.setCurrentConfig(this.chosenOptions, key, value)
        } else {
            this.chosenOptions = this.filter.setCurrentConfig(this.chosenOptions, key, e.target.value)
        }
        
        this.productService.getProductFromConfigs(this.chosenOptions).subscribe(data => {
            this.product = data[0]
            this.product['imgUrl'] = "../assets/No_Image_Available.gif";
        })

        this.toggleSelectedOption(e);   
        console.log(this.chosenOptions)     
    }

    public toggleSelectedOption(e): void {
        if (document.querySelector('.option.selected')) {
            document.querySelector('.option.selected').classList.remove('selected')
        }
        e.target.classList.add('selected')
    }

    public addToCart(product): void {
        if (product) {
            this.cart.addToCart(product);
        }
    }
}