import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './page/product/product.component';
import {CatalogComponent} from './page/catalog/catalog.component';
import {LoginComponent} from './page/login/login.component';

const routes: Routes = [
  {
    path: 'product/:sku',
    component: ProductComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
