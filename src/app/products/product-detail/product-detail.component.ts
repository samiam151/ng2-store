import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductsDetailComponent implements OnInit {
    product: any;
    birthday: Date;
    constructor(
        private productService: ProductService,
        private route:ActivatedRoute
        ) { 

        }

    ngOnInit() {     
        this.product = this.productService.getProduct(+this.route.snapshot.params['id']);
    }
}