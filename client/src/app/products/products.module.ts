import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProductsListComponent } from './containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './containers/products-details/products-details.component';
import { ProductsComponent } from './products.component';
import { AppMaterialModule } from '../material/material.module';
import { ProdictItemComponent } from './components/prodict-item/prodict-item.component';

const routes: Route[] = [
    { path: '', component: ProductsListComponent },
    { path: 'details', component: ProductsDetailsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AppMaterialModule
    ],
    declarations: [ProductsListComponent, ProductsDetailsComponent, ProductsComponent, ProdictItemComponent],
    exports: [RouterModule]
})
export class ProductsModule { }
