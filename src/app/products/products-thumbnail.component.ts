import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './products-thumbnail.component.html',
    styleUrls: ['./products-thumbnail.component.css']
})

export class ProductThumbnailCompnonent {
    @Input() product: any // data passed from the html 'product' 
    @Output() productClick = new EventEmitter()

    addToCart() {
        console.log('Product Added...');
        this.productClick.emit();
    }
}   