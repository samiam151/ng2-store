import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AddProductComponent } from './products/add-product/addProduct.component';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './user/auth.service';
import { LoginComponent } from './user/login.component';
import { ProductFilterService } from './products/filtering.service';

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
    LoginComponent
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
    ProductFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
