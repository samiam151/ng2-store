import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[]
  constructor (private productService: ProductService) { }

  ngOnInit () {
    this.products = this.productService.getProducts()
  }

  handleProductClicked(data){
    console.log(`${data.id}. ${data.name}: \$${data.price}`);
  }
}
