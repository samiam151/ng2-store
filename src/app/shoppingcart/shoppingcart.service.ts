import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

    private cart: Object[] = []
    private subject = new Subject<any>();

    public getCart(): Object[] {
        return this.cart;
    }

    public sendCartLength(){
        this.subject.next(this.cart.length)
    }

    public getCartLength() {
        // return this.cart.length;
        return this.subject.asObservable()
    }

    public addToCart(item: any): void {
        this.cart.push(item)
        this.sendCartLength()
        console.log(`${item.SKU} has been added...`)
        console.log(this.cart)
    }

    public removeFromCart(item: any): void {
        // this.cart.pop(item);
        console.log(`${item.SKU} has been removed...`)
    }

    public emptyCart(): void {
        this.cart = [];
    }
}