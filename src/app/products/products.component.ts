import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Object[]
  isDataAvailable: boolean = false

  constructor (
    private productService: ProductService,
    private route: ActivatedRoute) { 
     
    }

  ngOnInit () {
    this.productService.getProducts().subscribe((data: Object[]) => {
      this.products = data.map(product => {
        product['imgUrl'] = "../assets/rug.png";
        return product;
      });
    });
  }

  handleProductClicked(data){
    console.log(`${data.id}. ${data.name}: \$${data.price}`);
  }
}
