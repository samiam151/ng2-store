import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ShoppingCartService } from '../shoppingcart/shoppingcart.service';
import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  cartLength: any
  subscription: Subscription

  constructor(
    private auth: AuthService,
    private cart: ShoppingCartService){
      this.auth = auth;
      
      this.subscription = this.cart.getCartLength().subscribe(data => {
        console.log("from nav:", data)
        this.cartLength = data
      })
  }

}
