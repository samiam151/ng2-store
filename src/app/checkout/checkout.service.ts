import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { ShoppingCartService } from '../shoppingcart/shoppingcart.service';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable()
export class CheckoutService {
    cart: Object[]

    constructor(private cartService: ShoppingCartService
    ) {
        
    }
}