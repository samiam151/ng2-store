import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

    private cart: Object[] = []
    private subject = new Subject<any>();s

    public getCart(): Object[] {
        return this.cart;
    }

    public sendCartLength(){
        let len: any;
        // if (this.cart.length > 1){
        //     len = this.cart.reduce((a,b) => {
        //         console.log(a,b)
        //         return a['quantity'] + b['quantity']
        //     })
        // } else {
        //     len = this.cart.length
        // }
        len = this.cart.length
        
        // console.log(len)
        this.subject.next(len)
    }

    public getCartLength() {
        // return this.cart.length;
        return this.subject.asObservable()
    }

    public addToCart(item: Object): void {
        this.cart.push(item)
        this.sendCartLength()

        // console.log(`${item['product']['SKU']} has been added...`)
        // console.log('cart: ', this.cart)
    }

    public removeFromCart(item: any): void {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i]['SKU'] === item['SKU']){
                // console.log('found')
                this.cart.splice(i, 1);
            }     
        }
        this.sendCartLength()
    }

    public emptyCart(): void {
        this.cart = [];
    }
}