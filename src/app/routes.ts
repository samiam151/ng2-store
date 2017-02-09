import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products/product-detail/product-detail.component';
import { AddProductComponent } from './products/add-product/addProduct.component';

export const appRoutes:Routes = [
    { path: 'products/add', component: AddProductComponent },
    { path: 'products', component: ProductsComponent},
    { path: 'products/:id', component: ProductsDetailComponent},
    { path: '', redirectTo: 'products', pathMatch: 'full'}
]