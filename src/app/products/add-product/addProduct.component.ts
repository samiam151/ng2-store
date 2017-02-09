import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'addProduct.component.html'
})
export class AddProductComponent implements OnInit {
    constructor(private route:Router) { }

    ngOnInit() { }

    cancel(){
        this.route.navigate(['/products']);
    }
}