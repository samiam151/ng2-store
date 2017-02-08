import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    new Product(1, "Men's Dallas Cowboys Dez Bryant Nike Navy Blue Team Color Game Jersey", true, 99.99, "Navy", ["XXS", "S", "M", "XXL"]),
    new Product(2, "Men's Washington Redskins Alfred Morris Nike Red Team Color Game Jersey", true, 39.99, "Crimson", ["S", "M", "XXL"]),
    new Product(3, "Men's Dallas Cowboys Ezekiel Elliot Nike Red Team Color Game Jersey", true, 99.99, "Navy", ["S", "M", "L", "XXL"])
  ]

  handleProductClicked(data){
    console.log(`${data.id}. ${data.name}: \$${data.price}`);
  }
}
