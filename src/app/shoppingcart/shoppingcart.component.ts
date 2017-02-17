import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shoppingcart.service';

@Component({
    templateUrl: 'shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    cartItems: Object[]

    constructor(private cartService: ShoppingCartService) {
        this.cartItems = this.cartService.getCart()
     }

    ngOnInit() { }

    public emptyCart(): void {
        this.cartService.emptyCart()
    }

    public removeItem(product: Object): void {
        this.cartService.removeFromCart(product)
    }
}