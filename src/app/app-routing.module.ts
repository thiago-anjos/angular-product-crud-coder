import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      icon: 'home',
      label: 'Home',
    },
  },
  {
    path: 'products',
    component: ProductCrudComponent,
    data: {
      icon: 'storefront',
      label: 'Products',
    },
  },
  {
    path: 'products/create',
    component: ProductCreatComponent,
    data: {
      icon: 'create',
      label: 'Criar produto',
    },
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
