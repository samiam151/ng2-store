import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolverService {

    constructor(private productService:ProductService) { 
        
    }

    resolve(){
        return this.productService.getProducts().map(products => products)
    }
}