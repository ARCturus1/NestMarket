import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

const routes: Route[] = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'products', loadChildren: 'src/app/products/products.module#ProductsModule' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class RoutingModule { }
