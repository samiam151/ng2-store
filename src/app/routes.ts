import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products/product-detail/product-detail.component';
import { AddProductComponent } from './products/add-product/addProduct.component';
import { Error404Component } from './errors/404.component';
import { ProductRouteActivator } from './products/product-route-activator.service';
import { ProductResolverService } from './products/product-resolver.service';
import { LoginComponent } from './user/login.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';

export const appRoutes:Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'products/add', component: AddProductComponent },
    { path: 'products', component: ProductsComponent, resolve: {products:ProductResolverService}},
    // { path: 'products', component: ProductsComponent },
    { path: 'products/:sku', component: ProductsDetailComponent, canActivate: [ProductRouteActivator]},
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'products', pathMatch: 'full'}
]