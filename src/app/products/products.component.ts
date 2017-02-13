import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any

  constructor (
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit () {
    // this.products = this.route.snapshot.data['prods']
    this.productService.getProducts().subscribe((data) => {
      this.products = data.map(product => {
        product['imgUrl'] = "../assets/No_Image_Available.gif";
        return product;
      });
    });
  }

  handleProductClicked(data){
    console.log(`${data.id}. ${data.name}: \$${data.price}`);
  }
}
