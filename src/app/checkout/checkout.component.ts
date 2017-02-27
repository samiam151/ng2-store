import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';

import { ShoppingCartService } from '../shoppingcart/shoppingcart.service';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    cart: Object[]

    constructor(private cartService: ShoppingCartService) {
            this.cart = this.cartService.getCart();
    }

    ngOnInit() { }
}