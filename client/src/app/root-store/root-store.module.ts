import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductStoreModule } from './product-store';

@NgModule({
    imports: [
        CommonModule,
        ProductStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],
    declarations: []
})
export class RootStoreModule { }
