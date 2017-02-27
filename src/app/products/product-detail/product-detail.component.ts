///<reference path="../../../../node_modules/@types/jquery/index.d.ts" />

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
    products: Object[]
    productKeys: any[]
    options: IOptions
    optionsObj: any[]
    chosenOptions: Object = {}
    isDataAvailable: boolean = false
    showAll: boolean = false

    constructor(
        private productService: ProductService,
        private filter: ProductFilterService,
        private cart: ShoppingCartService,
        private route: ActivatedRoute) {  
            // Set product for detail page
            let sku = this.route.snapshot.params['sku'];
            this.productService.getProduct(sku).subscribe((data) => {
                this.product = data[0];
                this.product['imgUrl'] = "../assets/rug.png";
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
    
    public trackByIndex(index: number, value: number): any {
        return index;
    }

    public chooseOption(key, value, e): void {
        if (value){
            this.chosenOptions = this.filter.setCurrentConfig(this.chosenOptions, key, value)
        } else {
            this.chosenOptions = this.filter.setCurrentConfig(this.chosenOptions, key, e.target.value)
        }
        
        this.productService.getProductFromConfigs(this.chosenOptions).subscribe(data => {
            this.product = data[0]
            this.product['imgUrl'] = "../assets/rug.png";
        })

        this.toggleSelectedOption(e);   
        // console.log(this.chosenOptions)     
    }

    public toggleSelectedOption(e): void {
        if (document.querySelector('.option.selected')) {
            document.querySelector('.option.selected').classList.remove('selected')
        }
        e.target.classList.add('selected')
    }

    public addToCart(product, qty=1): void {
        if (product) {
            this.cart.addToCart({
                product: product,
                quantity: qty
            });
            product.Inventory -= qty
        }
    }
    public toggleAllProducts() {
        if(!this.products){
            this.productService.getProducts().subscribe(data => {
                this.products = data.map(product => {
                    product['imgUrl'] = "../assets/rug.png";
                    return product;
                });
            })
        }
        this.showAll = !this.showAll
    }

    public orderBy(term: string, e: HTMLElement): void {
        if (e.dataset['sort'] && e.dataset['sort'] === 'desc'){
            this.products = this.products.sort((a,b) => {
                e.dataset['sort'] = "asc";
                if(typeof a[term] === 'string'){
                    if(a[term].toUpperCase() > b[term].toUpperCase()){ return -1 }
                    if(a[term].toUpperCase() < b[term].toUpperCase()){ return 1 }
                    return 0
                }
                return a[term] - b[term];
            })
        } else {
            this.products = this.products.sort((a,b) => {
                e.dataset['sort'] = "desc";
                if(typeof a[term] === 'string'){
                    if(a[term].toUpperCase() < b[term].toUpperCase()){ return -1 }
                    if(a[term].toUpperCase() > b[term].toUpperCase()){ return 1 }
                    return 0
                }
                return b[term] - a[term];
            })
        }        
    }
}