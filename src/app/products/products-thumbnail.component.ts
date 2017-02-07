import { Component, Input } from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './products-thumbnail.component.html'
})

export class ProductThumbnailCompnonent {
    @Input() product: any
    
    addToCart() {
        console.log("Product added!");
    }
}