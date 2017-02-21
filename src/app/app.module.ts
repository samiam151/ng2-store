// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AddProductComponent } from './products/add-product/addProduct.component';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './user/login.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';

// Services
import { AuthService } from './user/auth.service';
import { ProductFilterService } from './products/filtering.service';
import { ShoppingCartService } from './shoppingcart/shoppingcart.service';
import { CheckoutService } from './checkout/checkout.service';


import { 
  ProductsComponent,
  ProductThumbnailCompnonent,
  ProductsDetailComponent,
  ProductService,
  ProductResolverService,
  ProductRouteActivator
 } from './products/index'

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductThumbnailCompnonent,
    NavComponent,
    ProductsDetailComponent,
    AddProductComponent,
    Error404Component,
    LoginComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],  
  providers: [
    ProductService,
    ProductResolverService,
    ProductRouteActivator,
    AuthService,
    ProductFilterService,
    ShoppingCartService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
