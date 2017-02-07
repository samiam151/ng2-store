import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailCompnonent } from './products/products-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductThumbnailCompnonent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
