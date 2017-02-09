import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AddProductComponent } from './products/add-product/addProduct.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductThumbnailCompnonent } from './products/products-thumbnail.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/product.service';
import { ProductsDetailComponent } from './products/product-detail/product-detail.component';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductThumbnailCompnonent,
    NavComponent,
    ProductsDetailComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],  
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
