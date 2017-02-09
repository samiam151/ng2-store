import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AddProductComponent } from './products/add-product/addProduct.component';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { NavComponent } from './nav/nav.component';
import { ProductThumbnailCompnonent } from './products/products-thumbnail.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products/product-detail/product-detail.component';

import { ProductService } from './products/product.service';

import { ProductRouteActivator } from './products/product-route-activator.service';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductThumbnailCompnonent,
    NavComponent,
    ProductsDetailComponent,
    AddProductComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],  
  providers: [
    ProductService,
    ProductRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
